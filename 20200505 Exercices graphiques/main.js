let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];
let ship; 
//let shipArray = [];
let sideShip;

function setup() {
  createCanvas(w, h);
  for (i = 0 ; i < 40 ; i++) {
	  starArray.push(new Star);
  }
  ship = new Ship();
  //sideShipe = new sideShip();
  //middle()
}

function draw() {
  background(0);
  starArray.forEach(function(item){
    item.create();
  })
  //sideShipe.sideShipe();
  ship.principalShip();
  ship.movePrincipalS();
}


