# bootlace

[Source](../scss/bootlace.scss): the main entry follows the installed Bootstrap 6 `node_modules/bootstrap/scss/bootstrap.scss` module order.
Local replacements and additions preserve Bootlace branding, colors, fonts, and OS-only appearance selection.
Read the individual notes for `theme3`, `root2`, `reboot2`, `forms2`, `datepicker2`, and `navbar2` before changing those imports.

The drawer, pagination, placeholder, popover, progress, spinner, stepper, toasts, tooltip, and transitions modules use upstream Bootstrap directly.
Their Sass dependencies contain no appearance selectors or declarations that override `color-scheme`.
Their colors use shared palette values, inherited text colors, or semantic component colors.
Tooltips deliberately exchange the body foreground and background colors for contrast.
No local replacements are required for these modules.

The Bootstrap 5 entry used upstream versions where available and disabled spinners and placeholders.
The Bootstrap 6 entry enables both components as part of the requested port.
Drawer and stepper are upstream Bootstrap 6 components.

Load `theme3` before modules consume palette values, and load `root2` instead of the upstream root.
Keep both appearance modes available through the root preference query.

The main entry includes upstream [helpers](helpers.md) and the utility API.
It disables the `color-scheme` utility through `$utilities` when it first forwards Bootstrap `config`.
This prevents classes from changing the inherited appearance mode.
Bootstrap stores the utility map in `config`, and its utilities module adds the standard entries to that map.

Load [utilities3](utilities3.md) for legacy classes before the upstream utility API.
Load [display-dark3](display-dark3.md) after that API.
The display helpers need the completed utility map.
The entry also includes the retained [jumbotron4](jumbotron4.md) and [media4](media4.md) components before helpers.

Existing Bootstrap 5 pages still need the [class and markup migration](bootstrap6-class-migration.md).
The Sass port does not supply a general compatibility layer for old Bootstrap 5 classes.
