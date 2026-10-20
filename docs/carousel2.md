# carousel2

[Source](../scss/_carousel2.scss): an unused Bootstrap 5.3.8 replacement kept as a migration reference.
The active entry forwards Bootstrap 6 `node_modules/bootstrap/scss/_carousel.scss` directly.

The old replacement added a light-color mixin and a `.carousel-light` class.
It omitted the light theme attribute when media queries selected the mode.
Its slide layout, captions, controls, and indicators otherwise matched Bootstrap 5.3.8.
Do not import this reference because its forced light and dark classes conflict with the current appearance policy.

Bootstrap 6 indicators use `--fg-3` by default.
Overlay indicators use `light-dark(var(--white), var(--black))`.
Icons use CSS masks and follow the current text color.
These colors follow the appearance that `root2` selects through the OS preference.
No local carousel replacement is required for this policy.

Bootstrap 6 changes the carousel layout and icon classes and removes the Bootstrap 5 `.carousel-caption` styling.
These are upstream changes, not lost Bootlace changes.
Use Bootstrap 6 markup when migrating carousel pages.
