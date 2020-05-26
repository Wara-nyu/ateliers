class SideShip extends Ship {

  constructor() {
    super();
    this.activ = true;
    this.y = random(h);
    this.multiplier = random(1, 6);
    if(coinToss()) {
      this.x = -this.multiplier*30 - 5;
      this.shipSpeed = random(1, 5);
    } else {
      this.x = width + this.multiplier*30 + 5;
      if(coinToss()) {
        this.activ = false;
        this.shipSpeed = -1;
      }else{
        this.multiplier = -1*this.multiplier;
        this.shipSpeed = -random(5, 10);
      }
    }
  }

  moveSideS() {
    if(this.activ = true){
    this.x += this.shipSpeed;
    }
  }

  activate() {
    this.activ = true;
  }
}
