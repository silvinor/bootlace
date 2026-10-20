<p align="center">
  <a href="https://github.com/silvinor/bootlace">
    <img src="docs/bootlace.svg" alt="Bootlace logo" width="128" height="128">
  </a>
</p>

<h1 align="center">Bootlace</h1>
<h3 align="center">A personal take on Bootstrap 6</h3>

<p align="center">
  Bootstrap, with light and dark appearance driven by the browser or OS preference.
</p>

## Bootlace

Bootlace is an opinionated CSS build based on Bootstrap 6.0.0-alpha.1.
It keeps the Bootlace palette, fonts, and selected legacy classes while adopting the Bootstrap 6 components and Sass modules.
The upstream release is an alpha, so class names and behavior can change.

Bootlace supports exactly two appearance modes: light and dark.
Both modes always ship together, and the browser or OS preference alone selects the mode.
Light is the default, and `@media (prefers-color-scheme: dark)` selects dark mode.
The root `color-scheme` also keeps native controls and scrollbars consistent with that preference.

Theme attributes, mode toggles, and forced light or dark classes do not select the appearance.
Named component colors such as `.theme-primary` and `.theme-danger` remain available and follow the selected appearance.
These colors describe component roles rather than additional appearance modes.

## Contents

- [What is included](#what-is-included)
- [How to use](#how-to-use)
- [Migrating from Bootstrap 5](#migrating-from-bootstrap-5)
- [Build and customize](#build-and-customize)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)

## What is included

The main stylesheet includes Bootstrap 6 components, helpers, and utilities, including spinners and placeholders.
Bootlace also retains these additions:

- Bootstrap 4 `.jumbotron`, `.jumbotron-fluid`, `.media`, and `.media-body` classes.
- Legacy spacing, alignment, float, and corner classes, documented in [utilities3](docs/utilities3.md).
- `.text-sans-serif`, `.text-serif`, and `.text-monospace` font helpers.
- `.text-inverted`, `.bg-inverted`, and text color keyword helpers.
- Preference-based `.d-dark-*` and `.d-light-*` display helpers, documented in [display-dark3](docs/display-dark3.md).

The Reboot stylesheet supplies base element styles without the full component and utility set.
Both stylesheets include the Bootlace palette, fonts, and OS-driven light and dark support.
Expanded files include source maps for browser developer tools.
Minified files do not include source maps.

```text
dist/css/
├── bootlace.css
├── bootlace.css.map
├── bootlace.min.css
├── bootlace.rtl.css
├── bootlace.rtl.css.map
├── bootlace.rtl.min.css
├── bootlace-reboot.css
├── bootlace-reboot.css.map
├── bootlace-reboot.min.css
├── bootlace-reboot.rtl.css
├── bootlace-reboot.rtl.css.map
└── bootlace-reboot.rtl.min.css
```

RTL means right-to-left layout.
Use the `.rtl.css` or `.rtl.min.css` file for that layout direction.
Bootlace supplies CSS only and does not include a separate JavaScript build.

## How to use

Start with the [Bootstrap 6 documentation](https://getbootstrap.com/docs/6.0/).
Copy `dist/css/bootlace.min.css` from this checkout into your site's CSS directory.
Replace the Bootstrap stylesheet link with the Bootlace link:

```html
<link rel="stylesheet" href="css/bootlace.min.css">
```

Use `bootlace-reboot.min.css` instead when you only need base element styles.
Load the full stylesheet once when you need components and utilities.
The full stylesheet already includes Reboot.

Use the browser or OS appearance preference to select light or dark mode.
No appearance attribute or JavaScript initialization is required.
For content that appears only in dark mode, use `class="d-none d-dark-block"`.
For content that appears only in light mode, use `class="d-block d-dark-none"`.

For interactive components, follow the Bootstrap 6 JavaScript instructions and use JavaScript that matches the CSS version.
Bootstrap 5 JavaScript and markup are not interchangeable with Bootstrap 6.
Follow the [Bootstrap browser requirements](https://getbootstrap.com/docs/6.0/getting-started/browsers-devices/) for supported browsers.

## Migrating from Bootstrap 5

Existing Bootstrap 5 pages need class and markup changes.
Responsive names change, for example `d-md-none` becomes `md:d-none` and `col-md-6` becomes `md:col-6`.
Component colors also change, for example `btn btn-primary` becomes `btn-solid theme-primary`.

Modal, Offcanvas, and Dropdown become Dialog, Drawer, and Menu.
Accordion and several form controls also need new markup.
Some unchanged utility names produce different sizes because the spacing and radius scales change.

Read the local [class migration reference](docs/bootstrap6-class-migration.md) and the [upstream migration guide](https://getbootstrap.com/docs/6.0/guides/migration/).
The [exact class inventory](docs/bootstrap5-classes-absent-in-bootstrap6.txt) lists Bootstrap 5 class selectors absent from the Bootstrap 6 alpha stylesheet.
The retained Bootstrap 4 additions do not provide general Bootstrap 5 compatibility.

Upstream examples can use appearance attributes or `.color-scheme-*` utilities.
Bootlace deliberately removes those appearance overrides.
Keep both modes controlled by the OS preference when adapting examples.

## Build and customize

From the repository root, install the locked dependencies:

```sh
npm ci
```

For the full CSS build, run:

```sh
npm run css
```

That command compiles Sass, adds vendor prefixes, generates RTL files, minifies the CSS, and runs the CSS tests.
For Sass compilation alone, run `npm run css-compile`.
Compilation alone does not refresh the RTL or minified files.

Bootstrap 6 uses Sass modules with `@use`, `@forward`, and `with (...)` configuration.
Bootlace's palette, fonts, and shared color overrides live in [`scss/_theme3.scss`](scss/_theme3.scss).
[`scss/_root2.scss`](scss/_root2.scss) preserves the root variables and enforces OS-only appearance selection.
The old Bootstrap 5 `_variables.scss` and `_variables-dark.scss` files are no longer part of this build.

Read [docs/bootlace.md](docs/bootlace.md) and the matching component notes before changing local Sass.
Keep local explanations current when changing a replacement or addition.
[`test-reboot.html`](test-reboot.html) provides native HTML specimens for inspecting the compiled Reboot stylesheet in a browser.

## Versioning

Bootlace release numbers track the Bootstrap version used as their base.
This build is based on Bootstrap 6.0.0-alpha.1.
When loading CSS from a CDN, pin a published Bootlace release tag for the required version.

## Copyright and license

Bootlace is copyright Silvino R. and includes code from the Bootstrap Authors.
Code is released under the [MIT License](LICENSE.md).
Bootstrap is also released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE).
