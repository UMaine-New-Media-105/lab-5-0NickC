let x;
let y;
let speedX;
let speedY;

function setup() {
  createCanvas(400, 400);

  x = 13;
  y = 13;
  speedX = random(1, 5);
  speedY = random(1, 5);
}

function draw() {
  background("palevioletred");

  x = x + speedX;
  y = y + speedY;

  addOk(x, y, 0.5);

  if (x > 265 || x < -50) speedX = speedX * -1;

  if (y > 205 || y < -65) speedY = speedY * -1;
}

function addOk(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("mistyrose");
  rect(175, 250, 50);
  ellipse(200, 200, 100, 140);
  fill("moccasin");
  rect(125, 300, 150, 100);
  fill("lavender");
  quad(150, 280, 250, 280, 275, 300, 125, 300);
  rect(190, 300, 20, 100);
  triangle(125, 300, 100, 400, 125, 400);
  fill("silver");
  rect(195, 300, 10, 100);
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    speedX = -3;
  } else if (keyCode === RIGHT_ARROW) {
    speedX = 3;
  }
  if (keyCode === UP_ARROW) {
    speedY = -3;
  } else if (keyCode === DOWN_ARROW) {
    speedY = 3;
  }
}
