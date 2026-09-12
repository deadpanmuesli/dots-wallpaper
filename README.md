# 🟣 dots wallpaper

A minimal wallpaper pack featuring soft dot grids, inspired by the [Catppuccin Mocha](https://github.com/catppuccin/catppuccin) colour palette.

<p align="center">
  <img src="./landscape/dots-a.png" alt="'dots' wallpaper preview" width="70%">
</p>

<p align="center">
  <img src="./landscape/dots-center-b.png" alt="'dots' wallpaper preview" width="30%">
  <img src="./landscape/dots-b.png" alt="'dots' wallpaper preview" width="30%">
  <img src="./landscape/dots-center-a.png" alt="'dots' wallpaper preview" width="30%">
</p>

- 🟠 Soft Catppuccin colorschemes to match your workflow
- ⚪ Minimalist dot-grid composition with variations (download the folder and set your desktop to automatically change wallpaper)
- 🟣 Includes both landscape and portrait formats for dual-screen setups, focus-modes, and clean desktops!

---

All wallpapers are **1920×1080** ([landscape/](./landscape/)) and **1080×1920** ([portrait/](./portrait/)), with subtle variation in spacing and composition.

Made with [p5.js](https://p5js.org/): [`/sketch/sketch.js`](./sketch/sketch.js)

Preview or remix the sketch 'live' via [p5.js editor](https://editor.p5js.org/thrly/sketches/UA0hQ_Bmz)

## Customising the sketch

Edit [`sketch/options.json`](./sketch/options.json) to select the available
variations without changing the JavaScript:

- Set `colourMode` to `random` or `noise`.
- Set `gridMode` to `full` or `noise`. The latter uses `noiseThreshold` to
  decide which dots are drawn.
- Set `alpha` to `null` for opaque dots or a number from `0` to `255` for
  translucent dots.
- Adjust the canvas dimensions, colours, spacing, dot size, background, and
  output filename in the same file.

When opening the sketch from a local filesystem, serve the `sketch` directory
with a local web server so the browser can load the JSON configuration.

---

## Want more?

I also made: 🧊 [cubes-wallpaper](https://github.com/thrly/cubes-wallpaper) – 3D stacking cube wallpapers with Catppuccin colourscheme

made with 🧡 and cats
