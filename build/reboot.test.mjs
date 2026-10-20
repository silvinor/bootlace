import assert from 'node:assert/strict';
import test from 'node:test';
import postcss from 'postcss';
import * as sass from 'sass';

const css = sass.compile('scss/bootlace-reboot.scss').css;
const parsed = postcss.parse(css);

test('keeps Bootstrap reboot rules while changing their color tokens', () => {
  const upstream = postcss.parse(sass.compile('node_modules/bootstrap/scss/bootstrap-reboot.scss').css);
  const reset = stylesheet => {
    const layer = stylesheet.nodes.find(node => node.type === 'atrule' && node.name === 'layer' && node.params === 'reboot').clone();
    layer.walkDecls(declaration => {
      if (declaration.prop.startsWith('--')) declaration.remove();
    });
    return layer.toString();
  };
  assert.equal(reset(parsed), reset(upstream));
});

test('keeps Bootlace colors and fonts alongside new Bootstrap tokens', () => {
  const properties = new Map();
  parsed.walkDecls(declaration => {
    if (declaration.parent.selector === ':root,\n:host') properties.set(declaration.prop, declaration.value);
  });
  assert.equal(properties.get('--blue-500'), 'light-dark(#069, #375a7f)');
  assert.equal(properties.get('--green-500'), 'light-dark(#096, #00bc8c)');
  assert.equal(properties.get('--gray-900'), 'light-dark(#212529, #222)');
  assert.equal(properties.get('--bg-body'), 'light-dark(var(--white), var(--gray-900))');
  assert.equal(properties.get('--fg-body'), 'light-dark(var(--gray-900), var(--gray-300))');
  assert.match(properties.get('--body-font-family'), /^system-ui, -apple-system, BlinkMacSystemFont,/);
  assert.match(properties.get('--font-serif'), /^Merriweather,/);
  assert(properties.has('--violet-500'));
  assert(properties.has('--gray-025'));
});

test('loads configured modules once when consumers use them again', () => {
  const repeated = sass.compileString([
    '@use "scss/bootlace-reboot";',
    '@use "scss/root2";',
    '@use "node_modules/bootstrap/scss/content/reboot";'
  ].join('\n'), { loadPaths: ['.'] }).css;
  assert.equal(repeated, css);
  assert.equal((css.match(/Bootlace Reboot/g) || []).length, 1);
});
