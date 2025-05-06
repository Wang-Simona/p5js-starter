let font;

function preload() {
  font = loadFont("迷你简雪君.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
}

function draw() {
  background("white");
  orbitControl();

  stroke("blue");
  strokeWeight(4);
  line(0, 0, width, 0);

  stroke("#DC143C");
  strokeWeight(4);
  line(0, 0, 0, height);

  stroke("red");
  strokeWeight(4);
  box(100);

  push();
  translate(width, 0);
  box(100);
  pop();

  push();
  translate(0, height);
  box(100);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
