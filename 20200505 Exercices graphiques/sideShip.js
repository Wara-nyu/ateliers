class SideShip extends Ship {

  constructor(shipX, shipY, shipN) {
    super(shipX, shipY, shipN);
    this.shipSpeed = 5;
    this.shipX = 400;
    this.shipY = 400;
    this.shipN = 5;
  }

  drawShip() {
    super.drawShip();
  }

  moveSideS() {
    this.shipX += this.shipSpeed;
  }
}

// speed = random(1, 7)
// utiliser coinToss pour choisir si this.shipX
// valeur absolue = Math.abs(x)
// this.shipX = width + n + 5 || this.shipX = -n - 5
// si this.shipX = -n - 5 => speed > 0 && n > 0
