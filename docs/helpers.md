# helpers

The main entry forwards the installed Bootstrap 6 `node_modules/bootstrap/scss/helpers/index.scss` directly.
Its `theme-colors` helper calls `generate-theme-classes()` from `node_modules/bootstrap/scss/_theme.scss`.

Classes such as `.theme-primary`, `.theme-danger`, and `.theme-secondary` select named component colors.
They assign `--theme-*` references to palette values and do not change `color-scheme`.
The palette values still follow the mode that `root2` selects through the OS preference.
The `.theme-reset`, `.theme-contrast`, and `.theme-muted` helpers also leave appearance selection unchanged.
These classes comply with the Bootlace rule for named component colors.

The remaining helpers and their Sass dependencies do not select an appearance mode.
No local helper replacement is required.
Keep `theme3` and `root2` before the helpers in the main entry.
Inspect the helper index and its dependencies again when updating Bootstrap.
