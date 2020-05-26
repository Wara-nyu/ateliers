class SideShip extends Ship {

  constructor() {
    super();
    this.newShip();
  }

  newShip(){
    this.activ = true;
    this.y = random(h);
    this.multiplier = random(1, 6);
    if(coinToss()) {
      this.x = -this.multiplier*30 - random(5, 1000);
      this.shipSpeed = random(1, 5);
    } else {
      this.x = width + this.multiplier*30 + random(5, 1000);
      if(coinToss()) {
        this.activ = false;
        this.shipSpeed = -random(1, 3);
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
