/**
 * @typedef {import("./p5/types").Graphics} Graphics
 *
 * @typedef {Object} Cubo
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} size
 * @property {string} color
 * @property {function} rotationFunction
 */

//

/**type {Cubo[]} */
let font;
let cubi = []; // 声明一个空数组，用于存储立方体对象
let copie = 30;

/**type{grahics} */
let g;
//

function preload() {
  font = loadFont("迷你简雪君.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  g = createGraphics(100, 100);

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-500, 500), // 随机x坐标（-500到500）
      y: random(-500, 500), // 随机x坐标（-500到500）
      z: random(-500, 500), // 随机x坐标（-500到500）
      size: 100, //固定尺寸
      color: random(["DarkTurquoise", "DarkSeaGreen", "DarkOrange"]),
      rotationFunction: random([rotateX, rotateY, rotateZ]),
    };
    cubi.push(cubo); // 将立方体对象添加到数组
  }
}

function draw() {
  background("black");
  orbitControl();

  rotateZ(frameCount * 0.001); //整体围绕Z轴旋转
  stroke("white");

  g.background("HotPink");
  g.textFont(font);
  g.textAlign(CENTER);
  g.text("你好", g.width / 2, 60);
  g.textSize(50);

  texture(g);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z); // 移动到立方体的随机位置

    let velocita = frameCount * 0.005;
    cubo.rotationFunction(velocita);
    rotateX(velocita);

    //fill(cubo.color);
    box(cubo.size); // 绘制立方体
    //torus(cubo.size, 50, 5); // 绘制圆管
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
