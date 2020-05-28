let w = window.innerWidth;
let h = window.innerHeight;
let x = 0;
let obj;

function setup() {
  createCanvas(w, h);
  obj = new Obj;
  background(0);
}

function draw(){
  obj.drawObj();  
  obj.move(); 
}

