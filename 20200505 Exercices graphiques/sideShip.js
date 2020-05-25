class SideShip extends Ship {

  constructor(shipX, shipY, shipN) {
    super(shipX, shipY, shipN);
    if(coinToss()) {
      this.shipX = -this.shipN*30 - 5;
    } else {
      this.shipX = width + this.shipN*30 + 5;
    }
    this.shipY = random(h);
    this.shipSpeed = Math.floor(random(1,7));
    if (this.shipX > width) {
      this.shipSpeed = -1*this.shipSpeed;
    }
    this.shipN = random(1, 3);
  }

  moveSideS() {
    this.shipX += this.shipSpeed;
  }
}

// utiliser coinToss pour choisir si this.shipX est < 0 ou > width
// valeur absolue = Math.abs(x)
// this.shipX = width + n + 5 || this.shipX = -n - 5
// si this.shipX = -n - 5 => speed > 0 && n > 0
