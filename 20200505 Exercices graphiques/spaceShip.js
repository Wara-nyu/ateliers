//code exécuté sur https://editor.p5js.org/

function setup() {
  createCanvas(600, 600);
  //middle()
}

x = 0;
y = 0;
eX = 100;
eY = 30;

function draw() {
  background(0);
  star();
  ship();
  move();
}

function middle() {
  x = width/2;
  y = height/2;
}

function move() {
 x += 3;
}

function ship() {
  fill(220);
  triangle(x, y, x, y + 100, x + 130, y +100);
  triangle(x, y+200, x, y + 300, x + 130, y + 200);
  triangle(x, y + 50, x, y+250, x + 300, y + 150);
}

function star() {
  fill(225,0,0);
  circle(eX, eY, 10)
}

function bounce() {
  if (x+300 >= width) {

  }
}
