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
let font; // 用于存放字体
let cubi = []; // 声明cubi 是一个数组，存放多个 Cubo 对象
let copie = 30; // 需要生成 Cubo 的个数

/**type{grahics} */
let g; // 一个离屏缓冲区（Graphics），作为纹理使用
//

function preload() {
  font = loadFont("迷你简雪君.TTF");
} //预加载字体

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl"); // 启用WebGL 3D渲染

  g = createGraphics(100, 100); // 创建离屏绘图缓冲区

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-500, 500), // 随机x坐标（-500到500）
      y: random(-500, 500), // 随机x坐标（-500到500）
      z: random(-500, 500), // 随机x坐标（-500到500）
      size: 100, //固定尺寸
      color: random(["DarkTurquoise", "DarkSeaGreen", "DarkOrange"]), //随机三个颜色之一
      rotationFunction: random([rotateX, rotateY, rotateZ]), // 随机一个旋转函数
    };
    cubi.push(cubo); // 把 cubo 添加进 cubi 数组
  }
}

function draw() {
  background("black");
  orbitControl(); // 鼠标控制视角

  rotateZ(frameCount * 0.001); //全局围绕Z轴旋转
  stroke("white");

  // 纹理内容更新：使用 g 作为纹理图层
  g.background("HotPink");
  g.textFont(font);
  g.textAlign(CENTER);
  g.text("你好", g.width / 2, 60);
  g.textSize(50);

  texture(g); // 将离屏图形作为纹理

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z); // 移动到立方体的随机位置

    let velocita = frameCount * 0.005;
    cubo.rotationFunction(velocita); // 根据其独立的旋转函数旋转
    rotateX(velocita); // 统一额外的 X 轴旋转

    //fill(cubo.color);
    box(cubo.size); // 绘制立方体
    //torus(cubo.size, 50, 5); // 绘制圆管
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//function mouseClicked() {
saveGif("mySketch", 1);
//}
