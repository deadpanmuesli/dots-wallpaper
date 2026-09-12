// generate dots wallpaper
// thrly

// uses colours from Catppucin (Mocha): https://github.com/catppuccin/catppuccin
let options;

function preload() {
  options = loadJSON("options.json");
}

function setup() {
  validateOptions();

  smooth();
  createCanvas(options.canvas.width, options.canvas.height);
  
  noStroke();

  background(options.background);
  dots();
}

function dots() {
  for (let x = 0; x <= width; x += options.steps) {
    for (let y = 0; y <= height; y += options.steps) {
      const noiseVal = noise(sin(x * 0.2), cos(y * 0.2));
      const noiseValScaled = map(noiseVal, 0, 1, 0, options.colours.length);
      const colourIndex = options.colourMode === "noise"
        ? Math.min(Math.floor(noiseValScaled), options.colours.length - 1)
        : Math.floor(random(options.colours.length));
      const c = color(options.colours[colourIndex]);

      if (options.alpha !== null) {
        c.setAlpha(options.alpha);
      }
      fill(c);
      const xPosition = map(
        x,
        0,
        Math.floor(width / options.steps) * options.steps,
        options.padding,
        width - options.padding,
      );
      const yPosition = map(
        y,
        0,
        Math.floor(height / options.steps) * options.steps,
        options.padding,
        height - options.padding,
      );

      const shouldDraw = options.gridMode === "full"
        || noise(x * 0.005, y * 0.005) > options.noiseThreshold;
      if (shouldDraw) {
        circle(xPosition, yPosition, options.dotSize);
      }
    }
  }
}

function keyPressed() {
  if (key === "s") {
    save(options.saveFilename);
  }
}

function validateOptions() {
  if (!options || !options.canvas || !Number.isInteger(options.canvas.width)
      || !Number.isInteger(options.canvas.height)) {
    throw new Error("options.json must define integer canvas width and height");
  }
  if (!Array.isArray(options.colours) || options.colours.length === 0) {
    throw new Error("options.json must define at least one colour");
  }
  if (!["noise", "random"].includes(options.colourMode)) {
    throw new Error('options.colourMode must be "noise" or "random"');
  }
  if (!["full", "noise"].includes(options.gridMode)) {
    throw new Error('options.gridMode must be "full" or "noise"');
  }
  if (!Number.isFinite(options.steps) || options.steps <= 0
      || !Number.isFinite(options.dotSize) || options.dotSize <= 0
      || !Number.isFinite(options.padding) || options.padding < 0
      || !Number.isFinite(options.noiseThreshold)
      || options.noiseThreshold < 0 || options.noiseThreshold > 1) {
    throw new Error("options.json contains invalid drawing dimensions or threshold");
  }
  if (options.alpha !== null
      && (!Number.isFinite(options.alpha) || options.alpha < 0 || options.alpha > 255)) {
    throw new Error("options.alpha must be null or a number from 0 to 255");
  }
  if (typeof options.background !== "string" || typeof options.saveFilename !== "string") {
    throw new Error("options.json must define background and saveFilename");
  }
}
