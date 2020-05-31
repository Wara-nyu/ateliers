let w = window.innerWidth;
let h = window.innerHeight;
let x = 0;
let radius = 75;
let py;
let angle;
let frequence = 5;
//let obj;

function setup() {
  createCanvas(w, h);
  //obj = new Obj;
  background(0);
}

function draw(){
  py = height/2 + sin(radians(angle))*(radius);
  fill(0);
  rect(x, 0, 6, h);
  fill(0,255,0);
  noStroke();
  ellipse(10+x, py, 5, 5);
  angle -= frequence;
  move();
  //obj.drawObj();  
  //obj.move(); 
}

function move() {
  if(x>=w) {
    x=0;
    angle = 0;
  }else{
    x+=1;
  }
}
