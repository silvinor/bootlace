import assert from 'node:assert/strict';
import test from 'node:test';
import stylelint from 'stylelint';

const configFile = './stylelint.config.mjs';

test('accepts Bootstrap variable alignment, empty comments, and mixin parentheses', async () => {
  const result = await stylelint.lint({
    configFile,
    codeFilename: 'scss/stylelint-test.scss',
    code: '// Colors\n//\n$color:    #fff !default;\n\n@include reset-text();\n'
  });
  assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
});

test('enforces Bootstrap rules for CSS and SCSS', async () => {
  for (const [codeFilename, code, rule] of [
    ['scss/stylelint-test.scss', '$color: #fff;\n', 'scss/dollar-variable-default'],
    ['scss/stylelint-test.scss', 'a {\n  border-radius: .25rem;\n}\n', 'property-disallowed-list'],
    ['scss/stylelint-test.scss', '@include clearfix;\n', 'scss/at-mixin-argumentless-call-parentheses'],
    ['stylelint-test.css', 'a {\n  color: #fff !important;\n}\n', 'declaration-no-important'],
    ['stylelint-test.css', 'a {\n  colr: #fff;\n}\n', 'property-no-unknown']
  ]) {
    const result = await stylelint.lint({ configFile, codeFilename, code });
    assert.deepEqual(result.results[0].invalidOptionWarnings, []);
    assert(result.results[0].warnings.some(warning => warning.rule === rule), rule);
  }
});

test('allows non-default variables in Bootstrap test files', async () => {
  const result = await stylelint.lint({
    configFile,
    codeFilename: 'scss/stylelint-test.spec.scss',
    code: '$color: #fff;\n'
  });
  assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
});

test('ignores generated CSS and vendor files', async () => {
  for (const codeFilename of ['dist/css/test.css', 'vendor/test.scss', 'test.min.css']) {
    const result = await stylelint.lint({ configFile, codeFilename, code: 'a { colr: red; }' });
    assert.equal(result.errored, false, codeFilename);
    assert(result.results.every(file => file.ignored), codeFilename);
  }
});
