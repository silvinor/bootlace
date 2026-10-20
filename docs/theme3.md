# theme3

[Source](../scss/_theme3.scss): additional Bootlace configuration for the installed Bootstrap 6 modules and local `root2`.

This file carries over the Bootlace light and dark base colors, white and black values, gray values, and font stacks.
It also configures body colors, links, code, and borders.
Other generated shades follow the Bootstrap 6 color calculations.

Configure the upstream `colors` and `theme` modules and local `root2` before other files load them.
Body colors belong in `$theme-bgs` and `$theme-fgs` because the root generation overwrites matching entries in `$root-tokens`.
Fonts and the remaining root values use `$root-tokens`.

The name `theme3` does not imply selectable appearance modes.
CSS `light-dark()` evaluates palette values after `root2` selects the mode through the OS preference query.
Do not add mode switches or emit Reboot styles here.
Highlight configuration belongs in `scss/_reboot2.scss`.
