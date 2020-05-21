class SideShip extends Ship {

//  constructor(x, y, n) {
//    super(x, y, n);
//    this.speed = ship.shipRand(0, 10);
//    //this.x -= this.n;// |!| si speed est positif this.x += this.n si speed est negatif à implémenter
//    console.log(this.speed);
//  }

  drawShip() {
    super.drawShip();
    this.x = 400;
    this.y = 400;
    this.n = -5;
  }

  moveSideS() {
    //this.speed = ship.shipRand(0, 10);
    this.x += this.speed;
  }
}
