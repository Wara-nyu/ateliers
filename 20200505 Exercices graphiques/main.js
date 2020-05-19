let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];
let ship; 
//let shipArray = [];
let sideShip;
let speedP = 3;

function setup() {
  createCanvas(w, h);
  for (let i = 0 ; i < 40 ; i++) {
	  starArray.push(new Star);
  }
  ship = new Ship();
  //sideShipe = new sideShip();
}

function draw() {
  background(0);
  starArray.forEach(function(item){
    if (item.starX < 0) {
      item.asign();
    } else {
      item.create();
    }
  })
  //sideShipe.sideShipe();
  ship.principalShip();
  ship.movePrincipalS();
}


