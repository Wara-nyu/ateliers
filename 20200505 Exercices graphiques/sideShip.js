class SideShip extends Ship {

  constructor(shipX, shipY, shipN) {
    super(shipX, shipY, shipN);
    this.shipSpeed = Math.floor(random(1,7));
    this.shipX = -this.shipN*30 -5;
    this.shipY = random(h);
    this.shipN = random(1, 3);
  }

  drawShip() {
    super.drawShip();
  }

  moveSideS() {

    this.shipX += this.shipSpeed;
  }
}

// utiliser coinToss pour choisir si this.shipX est < 0 ou > width
// valeur absolue = Math.abs(x)
// this.shipX = width + n + 5 || this.shipX = -n - 5
// si this.shipX = -n - 5 => speed > 0 && n > 0
