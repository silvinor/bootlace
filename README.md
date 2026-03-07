<p align="center">
  <a href="https://github.com/silvinor/bootlace">
    <img src="docs/bootlace.svg" alt="Bootlace logo" width="128" height="128">
  </a>
</p>

<h1 align="center">Bootlace</h1>
<h3 align="center">A personal take on Bootstrap</h3>

<p align="center">
  Bootstrap, but with changes that the OG would not accept.
</p>


## Bootlace

> :warning: This is a **very** opinionated variant of Bootstrap :bangbang:

[Bootstrap](https://github.com/twbs/bootstrap) claims it's *"dark mode"* enabled - it's not[^1]. It is however *"theme enabled"*, and that's okay. **"Dark Mode"** implies that CSS' browser `prefers-color-scheme` is supported - that is the [CSS Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme) specification is met - and is supported out of box. *(`prefers-color-scheme: pink` is not a thing, regardless of how much they want it to be.)* The Bootstrap Authors are however set in their ways, and, rightly, they should be - it's their project to impose their opinions on. But this is open-source, and so we can create our own versions.

**Bootlace** is a personal take on Bootstrap to make it true *"dark mode"* enabled. This version forces the CSS Media Queries `prefers-color-scheme` methodology and removes the runtime `data-bs-theme` shenanigans[^1]. Why? Read [here](https://github.com/silvinor/bootstrap-dark/blob/master/README.md). Also included:

1. Added `color-scheme` to `:root` to ensure scrollbars are the correct color.
1. Wound in some legacy Bootstrap 4 classes to make it more version portable.
    - `jumbotron`
    - `media`
1. Added `text-{font}` classes. (i.e., `sans-serif`, `serif` & `monospace`)
1. Added some unique classes to help with dark mode implementation, e.g. `d-dark-*` and `d-light-*` classes.
2. `.min` variants of the CSS do not include source-maps[^1].

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

    ```
    <link href="https://cdn.jsdelivr.net/gh/silvinor/bootlace@{version}/dist/css/bootlace.min.css" rel="stylesheet" integrity="{valid SRI here}" crossorigin="anonymous">
    ```
    <br>

    - Replace `{version}` with the version wanted and released here. *(Releases in Bootstrap may not be here.)*
        - Example: "`https://cdn.jsdelivr.net/gh/silvinor/bootlace@5.3.8/dist/css/bootlace.min.css`"
    - Replace `{valid SRI here}` with a valid SRI generated from [SRI Hash Generator](https://www.srihash.org/)
    - You can also replace `{version}` with `HEAD` to use to the latest commit, but the SRI may change and its inclusion is moot.<br>
        - Example: "`https://cdn.jsdelivr.net/gh/silvinor/bootlace@HEAD/dist/css/bootlace.min.css`"

<!--
3. Add the `color-scheme` meta tag to the `<head>` of your html file.

    ```
    <meta name="color-scheme" content="light dark">
    ```
-->

4. *... should work* &#x1F937;.
  

## Versioning

Bootlace is versioned to mirror the version of Bootstrap that its based on.


## Copyright and license

Code released under the [MIT License](https://github.com/silvior/bootlace/blob/main/LICENSE,md).

Includes parts from [Bootstrap](https://github.com/twbs/bootstrap), code and documentation copyright 2011-2025 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors), and also released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE).


<p align="center">⁂</p>

[^1]: Opinion
