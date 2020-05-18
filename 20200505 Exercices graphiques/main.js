let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];
let ship; 

function setup() {
  createCanvas(w, h);
  for (i = 0 ; i < 40 ; i++) {
	  starArray.push(new Star);
  }
  ship = new Ship();
  //middle()
}


function draw() {
  background(0);
  starArray.forEach(function(item){
    item.create();
  })
  ship.principalShip();
}

function middle() {
  x = width/2;
  y = height/2;
}

