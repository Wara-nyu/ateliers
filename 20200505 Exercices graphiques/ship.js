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

  sideShip() {
    this.n = random(5);//trouver comment donner un interval pour evité le 0
    this.x -= this.n;// |!| si speed est positif this.x += this.n si speed est negatif à implémenter
    principalShip();
  }

  movePrincipalS() {
    if((x+300) < width){
      this.x += 3;
    } else {
      this.x += 0;
    }
  }

  moveSideS() {
    let speed = random (10);//speed = 0 N'est pas un soucis
    this.x += speed;
  }

  //faut-il fait une pour eliminer les ships(objets) qui sortent de la fenêtre ?
}
