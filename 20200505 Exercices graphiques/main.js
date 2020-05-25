let w = window.innerWidth;
let h = window.innerHeight;
let starArray = [];
let ship;
let sideShip;
let sideShip1;
let speedP = 3;

function setup() {
  createCanvas(w, h);
  for (let i = 0 ; i < 40; i++) {
	  starArray.push(new Star());
  }
  ship = new Ship();
  sideShip1 = new SideShip();
  sideShip = new SideShip();
}

function draw() {
  background(0);
  starArray.forEach(function(item){
    if (item.starX < 0) {
      item.newStar();
    } else {
      item.createStar();
    }
  })
  sideShip.drawShip();
  sideShip1.drawShip();
  sideShip1.moveSideS();
  sideShip.moveSideS();
  ship.drawShip();
  ship.movePrincipalS();
}

function coinToss() {
 return Math.floor((Math.random() * 2)); 
}
