# utilities3

[Source](../scss/_utilities3.scss): additional Bootlace utilities retained from the Bootstrap 5 build, including Bootstrap 4 compatibility classes.
The Bootstrap 6 utility API still generates the standard utilities separately.

This file keeps `.mr-*`, `.ml-*`, `.pr-*`, `.pl-*`, `.text-left`, `.text-right`, `.text-justify`, `.float-left`, and `.float-right`.
Responsive names keep their old form, such as `.mr-sm-3` and `.text-md-left`.
Queries use the installed Bootstrap 6 breakpoints, including its `2xl` name instead of the former `xxl` name.
The legacy spacing scale remains 0, .25, .5, 1, 1.5, and 3 times `$spacer`.
Margin classes also retain `auto`.

The file keeps `.rounded-left*` and `.rounded-right*`, including numbered, circle, and pill variants.
Numbered sizes retain the Bootlace 5 values instead of adopting the Bootstrap 6 radius scale.
The file also keeps `.text-inverted`, `.bg-inverted`, and the text helpers for CSS color keywords.
The font helpers remain `.text-sans-serif`, `.text-serif`, and `.text-monospace`.
Color and font references use the current root variables.
Legacy utilities retain `!important` inside the `utilities` layer.

The main entry disables the upstream `color-scheme` utility when it first loads Bootstrap `config`.
This prevents `.color-scheme-light`, `.color-scheme-dark`, and `.color-scheme-auto` from selecting component appearance.
Keep that restriction when changing utility configuration.
Forward this addition before the upstream utility API, and read [display-dark3](display-dark3.md) before changing the display helpers.
