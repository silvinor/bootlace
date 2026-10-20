# datepicker2

[Source](../scss/_datepicker2.scss): a replacement for Bootstrap 6 `node_modules/bootstrap/scss/_datepicker.scss`.

The calendar inherits its color scheme from the Bootlace root.
The component declaration `color-scheme: light dark` is removed.
The `[data-bs-theme="light"]` and `[data-bs-theme="dark"]` overrides are also removed.
Only the root media query selects the appearance mode.
This file needs no separate appearance query because `color-scheme` already inherits.

Import paths point to the installed Bootstrap helpers from the local file location.
All remaining calendar styles stay aligned with upstream Bootstrap.
The main entry must forward `datepicker2` instead of the upstream datepicker.
Keep these differences when updating Bootstrap.
