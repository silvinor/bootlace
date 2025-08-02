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

[Bootstrap](https://github.com/twbs/bootstrap) claims it's *"dark mode"* enabled - it's not[^1]. It is however *"theme enabled"*, and that's okay. **"Dark Mode"** implies that CSS' browser `prefers-color-scheme` is supported - that is the [CSS Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme) specification is met - and is supported out of box. *(`prefers-color-scheme: pink` is not a thing, regardless of how much they want it to be.)* The Bootstrap Authors are however set on their ways, and, rightly, they should be. But this is open-source, and so we can create our own versions.

**Bootlace** is a personal take on Bootstrap to make it true *"dark mode"* enabled. I've also wound in some legacy bootstrap classes to make it more version portable, and also removed React *(et al.)* specific classes *(because you should be using Tailwind if you're developing on React.)*


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
    <link href="https://cdn.jsdelivr.net/gh/silvinor/bootlace@{version}/dist/css/bootlace.min.css" rel="stylesheet" integrity="{valid SRI here}" crossorigin="anonymous">`
    ```
    <br>

    - Replace `{version}` with the version wanted and released here. *(Releases in Bootstrap may not be here.)*
    - Replace `{valid SRI here}` with a valid SRI generated from [SRI Hash Generator](https://www.srihash.org/)  

3. *... should work* &#x1F937;.
  

## Versioning

Bootlace is versioned to mirror the version of Bootstrap that its based on.


## Copyright and license

Code released under the [MIT License](https://github.com/silvior/bootlace/blob/main/LICENSE,md).

Includes parts from [Bootstrap](https://github.com/twbs/bootstrap), code and documentation copyright 2011-2025 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors), and released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE).


[^1]: Opinion
