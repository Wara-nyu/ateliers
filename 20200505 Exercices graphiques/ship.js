class Ship {

  constructor() {
    this.shipX = 0;
    this.shipY = 150;
    this.shipN = 7;//indice
    this.shipSpeed = 5;
  }

  drawShip() {
    fill(220);
    triangle(this.shipX, this.shipY, this.shipX, this.shipY + this.shipN*10, this.shipX + this.shipN*13, this.shipY + this.shipN*10); //triangle rectangle du haut 
    triangle(this.shipX, this.shipY + this.shipN*20, this.shipX, this.shipY + this.shipN*30, this.shipX + this.shipN*13, this.shipY + this.shipN*20);//triangle rectangle du bas
    triangle(this.shipX, this.shipY + this.shipN*5, this.shipX, this.shipY + this.shipN*25, this.shipX + this.shipN*30, this.shipY + this.shipN*15);// triangle isocèle du milieu
  }

  movePrincipalS() {
    if((this.shipX + this.shipN*30/2) < width/2){
      this.shipX += this.shipSpeed;
    } else {
      this.shipX += 0;
      inTheMiddle = true;
    }
  }
}
