class Ship {

  constructor() {
    this.x = 0;
    this.y = 150;
    this.multiplier = 7;//indice
    this.shipSpeed = 5;
  }

  drawShip() {
    fill(220);
    triangle(this.x, this.y, this.x, this.y + this.multiplier*10, this.x + this.multiplier*13, this.y + this.multiplier*10); //triangle rectangle du haut 
    triangle(this.x, this.y + this.multiplier*20, this.x, this.y + this.multiplier*30, this.x + this.multiplier*13, this.y + this.multiplier*20);//triangle rectangle du bas
    triangle(this.x, this.y + this.multiplier*5, this.x, this.y + this.multiplier*25, this.x + this.multiplier*30, this.y + this.multiplier*15);// triangle isocèle du milieu
  }

  movePrincipalS() {
    if((this.x + this.multiplier*30/2) < width/2){
      this.x += this.shipSpeed;
    } else {
      this.x += 0;
      inTheMiddle = true;
    }
  }
}
