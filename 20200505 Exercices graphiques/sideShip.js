class SideShip extends Ship {

  constuctor {
    let ship = new ship;
    this.n = random(5);//trouver comment donner un interval pour evité le 0
    this.x -= this.n;// |!| si speed est positif this.x += this.n si speed est negatif à implémenter
    
  }

  sideShip() {
    ship.rincipalShip();
  }

  moveSideS() {
    let speed = random (10);//speed = 0 N'est pas un soucis
    this.x += speed;
  }

  //faut-il fait une pour eliminer les ships(objets) qui sortent de la fenêtre ?

}
