import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import postcss from 'postcss';
import * as sass from 'sass';

function assertOSOnly(css, filename) {
  const parsed = postcss.parse(css);
  if (!parsed.nodes.some(node => node.type !== 'comment')) return;

  const rootProperties = new Set();
  const modes = [];
  parsed.walkRules(rule => {
    assert.doesNotMatch(rule.selector, /\[data-(?:bs-)?(?:theme|color-scheme|color-mode)\b/i, filename);
    const isRoot = rule.selectors.includes(':root') || rule.selectors.includes(':host');
    rule.nodes.filter(node => node.type === 'decl').forEach(declaration => {
      if (isRoot) rootProperties.add(declaration.prop);
      if (declaration.prop !== 'color-scheme') return;
      if (rule.selector === 'iframe') {
        assert.equal(declaration.value, 'light dark', filename);
        return;
      }
      assert(isRoot, `${filename}: component selects its own color scheme`);
      let ancestor = rule.parent;
      while (ancestor && !(ancestor.type === 'atrule' && ancestor.name === 'media')) ancestor = ancestor.parent;
      if (ancestor) {
        assert.equal(ancestor.params, '(prefers-color-scheme: dark)', filename);
        assert.equal(declaration.value, 'dark', filename);
        modes.push('dark');
      } else {
        assert.equal(declaration.value, 'light', filename);
        modes.push('light');
      }
    });
  });
  assert.deepEqual(modes, ['light', 'dark'], `${filename}: both OS-driven modes must ship together`);
  for (const property of ['--body-font-family', '--bg-body', '--fg-body']) {
    assert(rootProperties.has(property), `${filename}: missing ${property}`);
  }
}

test('every active Sass entry follows only the OS color preference', () => {
  for (const filename of readdirSync('scss').filter(name => name.endsWith('.scss') && !name.startsWith('_'))) {
    assertOSOnly(sass.compile(`scss/${filename}`).css, filename);
  }
});

test('expanded, compressed, and RTL outputs retain both OS-driven modes', () => {
  const files = readdirSync('dist/css').filter(name => name.endsWith('.css'));
  for (const suffix of ['.css', '.min.css', '.rtl.css', '.rtl.min.css']) {
    assert(files.includes(`bootlace-reboot${suffix}`));
  }
  for (const filename of files) {
    assertOSOnly(readFileSync(`dist/css/${filename}`, 'utf8'), filename);
  }
});

test('rejects the upstream Bootstrap appearance overrides', () => {
  const upstream = sass.compile('node_modules/bootstrap/scss/bootstrap-reboot.scss').css;
  assert.throws(() => assertOSOnly(upstream, 'upstream Bootstrap'));
});
