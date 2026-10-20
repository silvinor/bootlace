# media4

[Source](../scss/_media4.scss): the retained Bootstrap 4 media layout.
The file keeps the existing Bootlace declarations inside the Bootstrap 6 `components` layer.

The `.media` class uses a flex row and aligns its children at the top.
The `.media-body` class grows to fill the available space.
The component contains no colors or appearance selectors and inherits the root appearance.
Forward it from the main entry before helpers and utilities.
