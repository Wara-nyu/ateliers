let w = window.innerWidth;
let h = window.innerHeight;
let starArray = [];
let ship;
let inTheMiddle = false;
let shipArray = [];

function setup() {
  createCanvas(w, h);
  for (let i = 0 ; i < 40; i++) {
	  starArray.push(new Star());
  }
  for (let i = 0; i < 3; i++){
    shipArray.push(new SideShip());
    console.log(shipArray[i].multiplier);
  }
  ship = new Ship();
  console.log(map(ship.multiplier, 1, 7, 100, 220));
}

function draw() {
  background(0);
  starArray.forEach(function(item){
    if (item.starX < 0) {
      item.newStar();
    } else {
      item.createStar();
    }
  });
  shipArray.forEach(function(item){
    if((Math.abs(item.x)-width/2)>6000) {
      item.newShip();
    }else{
    item.drawShip();
    }
    item.moveSideS();
  });
  if (inTheMiddle == true) {
    starArray.forEach(function(item){
      item.sMove();
    });
    shipArray.forEach(function(item){
      item.activate();
    });
  }
  ship.drawShip();
  ship.movePrincipalS();
}

function coinToss() {
 return Math.floor((Math.random() * 2)); 
}
