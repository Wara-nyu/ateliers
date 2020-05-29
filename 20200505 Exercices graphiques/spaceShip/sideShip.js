class SideShip extends Ship {

  constructor() {
    super();
    this.newShip();
  }

  newShip(){
    this.trigger = true;
    this.y = random(h);
    this.multiplier = random(1, 6);
    this.shipColor = map(this.multiplier, 1, 7, 100, 220);
    if(coinToss()) {
      this.x = -this.shipLength - random(5, 4000);
      this.shipSpeed = random(1, 5);
    } else {
      this.x = width + this.shipLength + random(5, 4000);
      if(coinToss()) {
        this.trigger = false;
        this.shipSpeed = -random(1, 3);
      }else{
        this.multiplier = -1*this.multiplier;
        this.shipSpeed = -random(5, 10);
      }
    }
  }

  moveSideS() {
    if(this.trigger = true){
    this.x += this.shipSpeed;
    }
  }

  activate() {
    this.trigger = true;
  }
}
