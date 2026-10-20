# reboot2

[Source](../scss/_reboot2.scss): a wrapper around Bootstrap 6 `node_modules/bootstrap/scss/content/_reboot.scss`.

This file preserves the Bootlace highlight background through `$reboot-mark-tokens` and `--mark-bg`.
Light mode mixes yellow with white.
Dark mode mixes the dark yellow with black.
CSS `light-dark()` follows the mode that `root2` selects through the OS preference query.

The upstream reset rules remain unchanged.
Both Bootlace entries forward this wrapper to share the highlight configuration.
Load it before any direct import of upstream Reboot because Sass accepts module configuration only on the first load.
