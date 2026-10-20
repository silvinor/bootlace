# navbar2

[Source](../scss/_navbar2.scss): a wrapper around Bootstrap 6 `node_modules/bootstrap/scss/_navbar.scss`.

The Bootstrap 5 replacement changed only the dark navbar selector.
It omitted the theme attribute when `$color-mode-type` selected media queries, but retained the forced `.navbar-dark` class.
That remaining class conflicts with the current Bootlace rule that only the OS preference selects appearance.

Bootstrap 6 navbar colors already use the shared foreground and background values.
The toggle icon uses a CSS mask and follows the current text color.
These features automatically follow the mode selected by `root2`.
Do not restore forced light or dark navbar classes or separate icon switching.

The wrapper sets every upstream `$navbar-dark-tokens` entry to `null`.
Bootstrap removes those entries before generating declarations, so `.navbar[data-bs-theme="dark"]` emits no CSS.
An empty map alone does not work because Bootstrap restores the default entries.
All other navbar styles remain upstream behavior, including responsive expansion and drawer integration.

The main entry must forward `navbar2` instead of the upstream navbar directly.
When updating Bootstrap, compare its dark token map and keep every entry disabled.
New dark token entries must not reintroduce attribute-based appearance control.
