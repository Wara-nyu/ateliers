let w = window.innerWidth;
let h = window.innerHeight;
let count = 0;
let starArray = [];
let ship;
let smallShip;
let speedP = 3;

function setup() {
  createCanvas(w, h);
  for (let i = 0 ; i < 40 ; i++) {
	  starArray.push(new Star);
  }
  ship = new Ship();
  smallShip = new SideShip();
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
  smallShip.drawShip();
  ship.drawShip();
  ship.movePrincipalS();
}

