<p align="center">
  <a href="https://github.com/silvinor/bootlace">
    <img src="docs/bootlace.svg" alt="Bootlace logo" width="128" height="128">
  </a>
</p>

<h1 align="center">Bootlace</h1>
<h3 align="center">A personal take on Bootstrap 5</h3>

<p align="center">
  Bootstrap, but with changes that the OG would not accept.
</p>

## Bootlace

> :warning: _This is a **very** opinionated variant of Bootstrap 5 CSS_ :bangbang:

[Bootstrap](https://github.com/twbs/bootstrap) claims it's _"dark mode"_ enabled - it's not[^1]. It is however _"theme enabled"_, and that's okay. **"Dark Mode"** implies that CSS' browser `prefers-color-scheme` is supported - that is the [CSS Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme) specification is met - and is supported out of box. _(`prefers-color-scheme: pink` is not a thing, regardless of how much they want it to be.)_ The Bootstrap Authors are however set in their ways, and, rightly, they should be - it's their project to impose their opinions on. But this is open-source, and so we can create our own versions.

**Bootlace** is a personal take on Bootstrap to make it true _"dark mode"_ enabled. This version forces the CSS Media Queries `prefers-color-scheme` methodology and removes the runtime `data-bs-theme` shenanigans[^1]. Why? Read [here](https://github.com/silvinor/bootstrap-dark/blob/master/README.md).

Also included:

1. Added `color-scheme` to `:root` to ensure scrollbars are the correct color.
1. Wound in some legacy Bootstrap 4 classes to make it more version portable.
   - `jumbotron`
   - `media`
1. Added `text-{font}` classes. (i.e., `sans-serif`, `serif` & `monospace`)
1. Added some unique classes to help with dark mode implementation, e.g. `d-dark-*` and `d-light-*` classes.
1. `.min` variants of the CSS do not include source-maps[^1].

But does not include:

1. A "Bootlace JS" variant _(please use the original repo for `bootstrap.js`)_
1. Removed "enhance the experience of your application" items, including: Spinners & Placeholders

   > _These exclusions are opinion based, since I often use other forms of these and find them less useful._

## Table of contents

- [What’s included](#whats-included)
- [How to use](#how-to-use)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)

---

## What’s included

Within the download you’ll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

<details>
  <summary>Download contents</summary>

```text
bootlace/
└── css/
    ├── bootlace-reboot.css
    ├── bootlace-reboot.css.map
    ├── bootlace-reboot.min.css
    ├── bootlace-reboot.rtl.css
    ├── bootlace-reboot.rtl.min.css
    ├── bootlace.css
    ├── bootlace.css.map
    ├── bootlace.min.css
    ├── bootlace.rtl.css
    └── bootlace.rtl.min.css
```

</details>

Provided are compiled CSS (`bootlace.*`), as well as compiled and minified CSS (`bootlace.min.*`). [Source maps](https://web.dev/articles/source-maps) (`bootlace.*.map`) for non minified files are available for use with certain browsers’ developer tools.

## How to use

1. [Get started with Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) as usual.

2. Replace the link to `bootsrap.css` with our [CDN](https://cdn.jsdelivr.net/gh/silvinor/bootlace/) link to `bootlace.css`.

   ```html
   <link
     href="https://cdn.jsdelivr.net/gh/silvinor/bootlace@{version}/dist/css/bootlace.min.css"
     rel="stylesheet"
     integrity="{valid SRI here}"
     crossorigin="anonymous"
   />
   ```

   - Replace _{version}_ with the version wanted and released here. _(Releases in Bootstrap may not be here.)_
     - Example: `https://cdn.jsdelivr.net/gh/silvinor/bootlace@5.3.9/dist/css/bootlace.min.css`
   - Replace _{valid SRI here}_ with a valid SRI (e.g., generated from [SRI Hash Generator](https://srihash.org/))
   - You can also replace `{version}` with `HEAD` to use to the latest commit, but the SRI may change and its inclusion is moot.<br>
     - Example: "`https://cdn.jsdelivr.net/gh/silvinor/bootlace@HEAD/dist/css/bootlace.min.css`"

<!--
3. Add the `color-scheme` meta tag to the `<head>` of your html file.

    ```
    <meta name="color-scheme" content="light dark">
    ```
-->

4. _... should work_ &#x1F937;.

## Versioning

Bootlace is versioned to mirror the version of Bootstrap that its based on.

## Copyright and license

Code released under the [MIT License](https://github.com/silvior/bootlace/blob/main/LICENSE,md).

Includes parts from [Bootstrap](https://github.com/twbs/bootstrap), code and documentation copyright 2011-2025 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors), and also released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE).

<p align="center">⁂</p>

[^1]: **Opinion**... as in mine. Your opinions may differ..
