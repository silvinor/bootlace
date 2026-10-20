# forms2

[Source](../scss/_forms2.scss): a replacement for Bootstrap 6 `node_modules/bootstrap/scss/forms/index.scss`.

This file preserves the upstream import order and forwards the installed Bootstrap form modules.
It substitutes local `form-control2` for upstream `form-control`.
That substitution makes dark select arrows follow the OS preference.

The main `scss/bootlace.scss` entry must forward this file instead of the upstream forms index.
When updating Bootstrap, keep the remaining imports aligned with that index.
Inspect new modules for appearance overrides before adding them.
