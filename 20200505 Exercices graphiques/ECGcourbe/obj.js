class Obj {

  constructor() {
  this.x = 0;
  this.r = 5;
  }

  drawObj() {
    fill(0);
    rect(this.x, 0, this.r + 5, h);
    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, h/2, this.r);
  }

  move() {
    if(this.x >= w) {
      this.x =0;
    }else{
      this.x += 1;
    }
  }
}
