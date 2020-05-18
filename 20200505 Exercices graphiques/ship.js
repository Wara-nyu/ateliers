class Ship {

  constructor() {
    this.x = 0;
    this.y = 100;
    this.n = 10;
  }

  principalShip() {
    fill(220);
    triangle(this.x, this.y, this.x, this.y + this.n*10, this.x + this.n*13, this.y + this.n*10);
    triangle(this.x, this.y + this.n*20, this.x, this.y + this.n*30, this.x + this.n*13, this.y + this.n*20);
    triangle(this.x, this.y + this.n*5, this.x, this.y + this.n*25, this.x + this.n*30, this.y + this.n*15);
  }


  movePrincipalS() {
    if((this.x + this.n*30) < width){
      this.x += 3;
    } else {
      this.x += 0;
      starArray.forEach(function(item){
        item.sMove();
      });
    }
  }
}
