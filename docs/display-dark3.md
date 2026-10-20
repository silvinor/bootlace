# display-dark3

[Source](../scss/utilities/_display-dark3.scss): additional Bootlace display helpers from the Bootstrap 5 build.
The file uses the installed Bootstrap 6 utility generator and its completed display values.

Classes such as `.d-dark-none` and `.d-dark-block` apply only inside `@media (prefers-color-scheme: dark)`.
Classes such as `.d-light-none` and `.d-light-block` apply only inside the matching light preference query.
The helpers change `display` and never select an appearance mode.
No theme attribute, forced appearance class, or `color-mode` mixin controls them.
Both sets always ship together inside the `utilities` layer and retain `!important`.

Forward this file after the upstream utility API so the completed display values are available through Bootstrap `config`.
For an element that appears only in dark mode, use `d-none d-dark-block`.
For an element that appears only in light mode, use `d-block d-dark-none`.
The mode-specific class alone does not hide the element in the other mode.
Read [utilities3](utilities3.md) before changing the shared utility setup.
