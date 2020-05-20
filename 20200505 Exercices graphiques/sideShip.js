class SideShip extends Ship {

  constructor() {
    this.n = 5;
    this.y = 10;
    this.x = 0;
    //this.x -= this.n;// |!| si speed est positif this.x += this.n si speed est negatif à implémenter
  }

//  drawShip() {
//    super.drawShip();
//  }

  moveSideS() {
    let speed = random (10);//speed = 0 N'est pas un soucis si le vaisseau est starX>heigth
    this.x += speed;
  }

  shipRand(min, max){
   return (Math.floor(Math.random() * (max-min) + min));//Math.floor() pour avoir des int et non des float 
  }
}
