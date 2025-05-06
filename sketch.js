let font;
let cubi = [];
let copie = 30;

function preload() {
  font = loadFont("迷你简雪君.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      size: 40,
      color: random(["DarkTurquoise", "DarkSeaGreen", "DarkOrange"]),
      //rotationAxis: random(["x", "y", "z"]),
      rotationFunction: random([rotateX, rotateY, rotateZ]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background("black");
  orbitControl();

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    cubo.rotationFunction(frameCount / 10);
    //   if (cubo.rotationAxis == "x") {
    //     rotateX(frameCount / 10);
    //   } else if (cubo.rotationAxis == "y") {
    //     rotateY(frameCount / 10);
    //   } else {
    //     rotateZ(frameCount / 10);
    //   }

    fill(cubo.color);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
