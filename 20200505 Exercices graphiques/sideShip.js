class SideShip extends Ship {

  constructor() {
    super();
    this.y = random(h);
    this.multiplier = random(1, 6);
    if(coinToss()) {
      this.x = -this.multiplier*30 - 5;
      this.shipSpeed = random(1, 5);
    } else {
      this.x = width + this.multiplier*30 + 5;
      if(coinToss()) {
        this.shipSpeed = -1;
      }else{
        this.multiplier = -1*this.multiplier;
        this.shipSpeed = -random(5, 10);
      }
    }
  }

  moveSideS() {
    this.x += this.shipSpeed;
  }
}
