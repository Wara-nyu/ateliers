class SideShip extends Ship {

  constructor(shipX, shipY, shipN) {
    super(shipX, shipY, shipN);
    this.shipN = random(1, 4);
    if(coinToss()) {
      this.shipX = -this.shipN*30 - 5;
    } else {
      this.shipX = width + this.shipN*30 + 5;
    }
    this.shipY = random(h);
    this.shipSpeed = Math.floor(random(1,7));
    if (this.shipX > width) {
      this.shipSpeed = -random(1, 2);
      if(coinToss()) {
        this.shipN = -1*this.shipN;
        this.shipSpeed = -random(5, 10);
      }else{
      }
    }
  }

  moveSideS() {
    this.shipX += this.shipSpeed;
  }
}
