class Ship {

  n = 10

  function principalShip() {
    fill(220);
    triangle(x, y, x, y + n*10, x + n*13, y +n*10);
    triangle(x, y + n*20, x, y + n*30, x + n*13, y + n*20);
    triangle(x, y + n*5, x, y + n*25, x + n*30, y + n*15);
  }

  function sideShip() {
    n = random(5);//trouver comment donner un interval pour evité le 0
    x -= n;// |!| si speed est positif x += n si speed est negatif à implémenter
    ship();
  }

  function movePrincipalS() {
    if((x+300) < width){
      x += 3;
    } else {
      x += 0;
    }
  }

  function moveSideS() {
    speed = random (10);//speed = 0 N'est pas un soucis
    x += speed;
  }

  //faut-il fait une function pour eliminer les ships(objets) qui sortent de la fenêtre ?
}
