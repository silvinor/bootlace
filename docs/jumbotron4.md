# jumbotron4

[Source](../scss/_jumbotron4.scss): the retained Bootstrap 4 jumbotron with Bootlace colors, adapted for Bootstrap 6 modules.
The file keeps `.jumbotron` and `.jumbotron-fluid` inside the `components` layer.

Padding remains 2rem vertically and 1rem horizontally below `sm`, then 4rem and 2rem from `sm` upward.
The bottom margin follows the vertical padding, as in the previous Bootlace version.
The fluid variant removes horizontal padding and rounded corners.
The standard radius uses `--radius-5`, and the text inherits its color by default.

The background uses `light-dark(var(--gray-200), var(--gray-800))` to preserve the old light and dark backgrounds.
The root preference query alone selects the mode.
Local custom properties use the Bootstrap 6 convention without the old `bs-` prefix.
No Bootstrap 5 variables, build flags, or theme selectors are required.
Forward this component after `theme3` and `root2`, before helpers and utilities.
