class SideShip extends Ship {

  drawShip() {
    super.drawShip();
    this.x = 400;
    this.y = 400;
    this.n = -5;
  }

  moveSideS() {
    //this.speed = random(0, 10);
    this.x += this.speed;
  }
}
