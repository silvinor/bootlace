# root2

[Source](../scss/_root2.scss): a replacement for Bootstrap 6 `node_modules/bootstrap/scss/_root.scss`.

This file keeps the upstream CSS variables, layer order, and generation logic.
Import paths point to the installed Bootstrap helpers.
Local `theme3` supplies the palette and font configuration before this module loads.

The default `:root` and `:host` declarations use `color-scheme: light`.
Only `@media (prefers-color-scheme: dark)` sets `color-scheme: dark` and the stronger dark shadow value.
The upstream `[data-bs-theme="light"]` and `[data-bs-theme="dark"]` overrides are removed.

This file enforces the Bootlace rule that the browser or OS preference alone selects light or dark mode.
Do not replace it with the upstream root import.
When updating Bootstrap, retain these differences and carry over unrelated upstream changes.
