# form-control2

[Source](../scss/_form-control2.scss): a replacement for Bootstrap 6 `node_modules/bootstrap/scss/forms/_form-control.scss`.

The dark select arrow follows `@media (prefers-color-scheme: dark)` instead of `[data-bs-theme="dark"]`.
This applies to `select.form-control` and `.form-control-caret`.
The arrow images remain the upstream images.

Import paths point to the installed Bootstrap helpers from the local file location.
All other form-control styles remain upstream behavior.
Keep this file connected through `scss/_forms2.scss` so the upstream appearance selector cannot return.
