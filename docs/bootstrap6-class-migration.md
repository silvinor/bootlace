# Bootstrap 5 to Bootstrap 6 classes

This reference compares stock Bootstrap 5.3.8 with the installed Bootstrap 6.0.0-alpha.1.
Removed classes have no equivalent CSS selector in the new build.
Renamed classes need new names, and some retained classes need new markup.
These categories differ from formal deprecation, which keeps a feature available temporarily.
The alpha can change before the final release.

The comparison found 1,447 class names in the Bootstrap 5 stylesheet that do not appear as class selectors in Bootstrap 6.
Most belong to responsive families with new names.
The [exact inventory](bootstrap5-classes-absent-in-bootstrap6.txt) lists those names, rather than claiming 1,447 separate features were removed.
This inventory excludes JavaScript-only hooks and includes hooks that no longer supply styles.

## Responsive names

Bootstrap 6 moves breakpoint names before the class and separates them with a colon.
Use an ordinary colon in HTML, for example `class="md:d-none"`.
The `xxl` breakpoint becomes `2xl`, and the larger breakpoint widths also change.
These changes cover utilities, layout, and responsive components. See the [migration guide](https://getbootstrap.com/docs/6.0/guides/migration/#css).

| Bootstrap 5 | Bootstrap 6 |
| --- | --- |
| `d-md-none` | `md:d-none` |
| `p-lg-3` | `lg:p-3`, with a changed spacing value |
| `col-md-6` | `md:col-6` |
| `row-cols-md-3` | `md:row-cols-3` |
| `offset-md-2` | `md:offset-2` |
| `g-md-3`, `gx-md-3`, `gy-md-3` | `md:g-3`, `md:gx-3`, `md:gy-3` |
| `container-sm` | `sm:container` |
| `navbar-expand-md` | `md:navbar-expand` |
| `table-responsive-md` | `md:table-responsive` |
| `list-group-horizontal-md` | `md:list-group-horizontal` |
| `sticky-md-top` | `md:sticky-top` |
| `offcanvas-md` | `md:drawer`, with new markup |
| `modal-fullscreen-sm-down` | `sm-down:dialog-fullscreen`, with new markup |
| `d-print-none` | `print:d-none` |

Some responsive components now use container queries, which measure a parent element instead of the viewport.
Navbar expansion, horizontal list groups, and card groups need an appropriate parent query container.
Renaming their classes alone does not provide that container.

## Components

The following mappings describe class families, not automatic HTML conversions.
Dialog, Drawer, Menu, and Accordion also require markup changes.
Their JavaScript APIs and data attributes need separate migration.
See the [Dialog](https://getbootstrap.com/docs/6.0/components/dialog/), [Drawer](https://getbootstrap.com/docs/6.0/components/drawer/), and [Menu](https://getbootstrap.com/docs/6.0/components/menu/) documentation.

| Bootstrap 5 class or family | Bootstrap 6 treatment |
| --- | --- |
| `modal`, `modal-header`, `modal-body`, `modal-footer`, `modal-title` | `dialog`, `dialog-header`, `dialog-body`, `dialog-footer`, `dialog-title` on native `<dialog>` markup. |
| `modal-dialog`, `modal-content` | Remove these wrappers. Sections sit inside the dialog. |
| `modal-sm`, `modal-lg`, `modal-xl`, `modal-fullscreen` | `dialog-sm`, `dialog-lg`, `dialog-xl`, `dialog-fullscreen`. |
| `modal-dialog-scrollable` | `dialog-scrollable` on the dialog. |
| `modal-dialog-centered` | Remove the wrapper and use the native dialog layout. |
| `modal-backdrop` | The native `::backdrop` replaces this element. |
| `modal-open`, `modal-static` | `dialog-open` on the root, and `dialog-static`. |
| `offcanvas`, `offcanvas-start`, `offcanvas-end`, `offcanvas-top`, `offcanvas-bottom` | `drawer` and matching `drawer-*` placement classes on `<dialog>`. |
| `offcanvas-header`, `offcanvas-body`, `offcanvas-title` | Matching `drawer-*` section classes. |
| `offcanvas-backdrop` | The native `::backdrop` replaces this element. |
| `dropdown-menu`, `dropdown-item`, `dropdown-divider`, `dropdown-header`, `dropdown-item-text` | `menu`, `menu-item`, `menu-divider`, `menu-header`, `menu-text`. |
| `dropdown`, `dropdown-center`, `dropup`, `dropup-center`, `dropstart`, `dropend` | Remove old wrappers. Configure Menu placement through its data attributes or API. |
| `dropdown-menu-start`, `dropdown-menu-end`, and responsive variants | Configure Menu placement instead. |
| `dropdown-toggle`, `dropdown-toggle-split` | The old toggle classes are unnecessary. Use the new Menu and button-group markup. |
| `dropdown-menu-dark` | Removed. Bootlace inherits its OS-selected appearance. |
| `accordion-button`, `accordion-collapse` | Use native `<details class="accordion-item">` and `<summary class="accordion-header">`. |
| `navbar-collapse` | Use a responsive Drawer for the collapsible region. |
| `navbar-dark`, the old `navbar-light` hook | Use inherited colors and an adaptive surface such as `bg-1`. |
| `navbar-nav-scroll` | Compose scrolling with sizing and overflow utilities. |
| `alert-dismissible` | Unnecessary. The alert handles a direct `.btn-close` child. |
| `btn-close-white` | Removed. The mask icon inherits text color. |
| `spinner-border-sm`, `spinner-grow-sm` | Keep the spinner type class and add `spinner-sm`. |
| `card-link`, `card-header-pills` | No dedicated styles. Use ordinary links, navigation, and spacing. |
| `card-title`, `card-text` | Remain usable as project hooks, but no longer provide dedicated styles. |
| `collapsed` | Collapse triggers use `aria-expanded` instead of this state class. |
| `collapsing` | Removed. Collapse transitions no longer need the intermediate class. |
| Toast `showing` and the old `hide` hook | Use the new `.show` lifecycle. |

The `.fade` class remains available for custom markup.
Bootstrap components no longer need it for their own transitions.
The `.placeholder-glow` class remains as an alias for `.placeholder-pulse`.

## Component colors

Bootstrap 6 separates component style from named color selection.
The named color classes do not select light or dark mode.
Bootlace keeps them because their palette follows the OS-selected appearance. See [buttons](https://getbootstrap.com/docs/6.0/components/button/).

| Bootstrap 5 example | Bootstrap 6 example |
| --- | --- |
| `btn btn-primary` | `btn-solid theme-primary` |
| `btn btn-outline-danger` | `btn-outline theme-danger` |
| `alert alert-warning` | `alert theme-warning` |
| `list-group-item list-group-item-success` | `list-group-item theme-success` |
| `table table-primary` | `table theme-primary` |
| `badge bg-primary` | `badge theme-primary`; `bg-primary` itself still exists. |

The old `light` and `dark` component color variants have no direct named-color replacement.
Choose an adaptive neutral surface or an appropriate semantic color.
Do not restore appearance switches to reproduce them.

## Forms

Checkboxes, radios, and switches no longer share `.form-check-input`.
Their layout also changes, so the following replacements require HTML review.
See the [checkbox documentation](https://getbootstrap.com/docs/6.0/forms/checkbox/) and the installed `scss/forms` sources.

| Bootstrap 5 | Bootstrap 6 |
| --- | --- |
| `form-check-input` on a checkbox | `check` on the input. |
| `form-check-input` on a radio | `radio` on the input. |
| `form-check`, `form-check-label`, `form-check-inline`, `form-check-reverse` | Use the new form-field or form-group layout, labels, and layout utilities. |
| `form-switch` | Use the new `switch` wrapper and its nested checkbox input. |
| `form-select` | Use `form-control` on the `<select>`. |
| `form-select-sm`, `form-select-lg` | Use `form-control` with `form-control-sm` or `form-control-lg`. |
| `was-validated` | Use `data-bs-validate` on the form for interaction-based validation. |
| `has-validation` | Remove it. Place feedback according to the new form-field layout. |

The `.is-valid` and `.is-invalid` classes remain available.
The `.valid-tooltip` and `.invalid-tooltip` classes now also require `.tooltip`.
The `.form-range` class remains, but now wraps an input with `.form-range-input`.

## Colors and other utilities

Foreground means the text or icon color.
Bootstrap 6 uses `.fg-*` for foreground utilities, while `.text-*` still covers typography and alignment.
See the [color documentation](https://getbootstrap.com/docs/6.0/utilities/colors/) and installed `_utilities.scss`.

| Bootstrap 5 | Bootstrap 6 treatment |
| --- | --- |
| `text-primary`, `text-danger`, and other semantic text colors | `fg-primary`, `fg-danger`, and matching foreground classes. |
| `text-primary-emphasis` and matching colors | `fg-emphasis-primary` and matching colors. |
| `text-body`, `text-reset`, `text-white`, `text-black` | `fg-body`, `fg-reset`, `fg-white`, `fg-black`. |
| `text-body-emphasis`, `text-body-secondary`, `text-body-tertiary`, `text-muted` | Choose the required contrast from `fg-1` through `fg-4`. Exact colors differ. |
| `text-light`, `text-dark`, and their emphasis variants | Choose an adaptive foreground or an explicit palette color. No matching `fg-light` or `fg-dark` exists. |
| `text-black-50`, `text-white-50` | Compose a foreground class and opacity, such as `fg-black fg-50`. |
| `text-opacity-*` | Use the supported `fg-*` opacity scale. |
| `bg-primary-subtle` and matching colors | `bg-subtle-primary` and matching colors. |
| `bg-body-secondary`, `bg-body-tertiary` | `bg-2`, `bg-1`. |
| `bg-light`, `bg-dark` | Choose adaptive neutral surfaces. No exact shade replacement exists. |
| `bg-opacity-*`, `border-opacity-*` | Use the supported `bg-*` or `border-*` opacity scale. |
| `border-primary-subtle` and matching colors | `border-subtle-primary` and matching colors. |
| `border-light`, `border-dark` | Choose neutral or semantic border colors. |
| `text-bg-primary` and matching colors | Compose `bg-primary fg-contrast-primary`, or use `theme-primary theme-contrast`. |
| `link-primary` and matching colors | Use a foreground utility, with hover styling where required. No exact single-class replacement exists. |
| `link-body-emphasis` | Choose a foreground utility and hover treatment. |
| `link-opacity-50`, `link-opacity-50-hover` | `link-50`, `hover:link-50`. |
| `link-offset-1`, `link-offset-1-hover` | `underline-offset-1`, `hover:underline-offset-1`. |
| `link-underline-primary` and matching colors | `underline-primary` and matching colors. |
| `link-underline-opacity-50`, its hover form | `underline-50`, `hover:underline-50`. |
| `link-underline` | Use the new underline color and text-decoration utilities as needed. |
| `focus-ring-primary` and matching colors | Use `focus-ring` with the appropriate `theme-*` color. |
| `mw-100`, `mh-100` | `max-w-100`, `max-h-100`. |
| `clearfix` | `d-flow-root`. |
| `ratio` | Ratio utilities now size the target itself. Review the old wrapper and child layout. |
| `figure-img` | The figure layout now supplies image spacing without this class. |

The default opacity scale uses multiples of ten from 10 through 100.
Old 25 and 75 opacity values therefore need custom values or a deliberate choice from the new scale.
Existing names can also change behavior: spacing classes now use 13 steps, and numbered radius classes use a new scale.
For example, stock `.p-3` changes from 1rem to .5rem, and `.rounded-3` changes from .5rem to .25rem.

## Typography

Bootstrap 6 replaces numeric font-size names with size names.
The new values include responsive sizes, so these are approximate migration choices rather than identical visual replacements.
See the [font-size documentation](https://getbootstrap.com/docs/6.0/utilities/font-size/).

| Bootstrap 5 | Bootstrap 6 treatment |
| --- | --- |
| `fs-6`, `fs-5`, `fs-4`, `fs-3`, `fs-2`, `fs-1` | `fs-md`, `fs-lg`, `fs-xl`, `fs-2xl`, `fs-3xl`, `fs-4xl`. |
| `display-1` through `display-6` | Combine a large `fs-*` utility with `fw-light`, or use custom typography. |
| `lead` | Approximate with `fs-lg fw-light`. |
| `lh-base` | `lh-md`. |

## Carousel

The new carousel uses native scrolling and changes its controls.
Captions and transitional classes have no direct replacement.
See the [carousel documentation](https://getbootstrap.com/docs/6.0/components/carousel/).

| Bootstrap 5 | Bootstrap 6 treatment |
| --- | --- |
| `carousel-control-prev-icon`, `carousel-control-next-icon` | `carousel-icon-prev`, `carousel-icon-next`. |
| `carousel-control-prev`, `carousel-control-next` | Use buttons with the new icons and slide data attributes. |
| `carousel-caption` | Compose and position slide content explicitly. |
| `carousel-item-start`, `carousel-item-end`, `carousel-item-next`, `carousel-item-prev`, `pointer-event` | Removed from the carousel lifecycle. |
| `carousel-dark` | Removed. Bootlace follows the root OS preference automatically. |

## Bootlace status

Bootlace includes the Bootstrap 6 classes and the documented local additions.
It does not currently provide a general Bootstrap 5 compatibility layer.
The restored Bootstrap 4 classes in [utilities3](utilities3.md), [jumbotron4](jumbotron4.md), and [media4](media4.md) remain available.
The preference-based [display helpers](display-dark3.md) also remain available.

Do not restore forced light or dark classes or theme attributes as compatibility shortcuts.
Some simple utility names can receive aliases in a future compatibility addition.
Aliases cannot supply the new markup, JavaScript, accessibility behavior, or query containers that rebuilt components require.
This comparison does not test existing application pages.
