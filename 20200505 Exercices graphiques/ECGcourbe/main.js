let w = window.innerWidth;
let h = window.innerHeight;
let x = 0;
let r = 5;
//let obj;

function setup() {
  createCanvas(w, h);
  obj = new Obj;
  background(0);
}

function draw(){
  fill(0);
  rect(x, 0, r+5, h);
  fill(0,255,0);
  noStroke();
  ellipse(x, h/2, r);
  move();
  //obj.drawObj();  
  //obj.move(); 
}

function move() {
  if(x>=w) {
    x=0;
  }else{
    x+=3;
  }
}

