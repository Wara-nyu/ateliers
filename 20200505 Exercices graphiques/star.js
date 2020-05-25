class Star {
  constructor() {
    this.newStar(random(w));
  }

  newStar(x = width + 5) {
    this.starX = x;
    this.starY = random(h);
    this.starSize = random(7);
    this.starColor = this.randomColor();
    this.starSpeed = random(2) + 1;
  }

	randomColor() {
		return {r: random(255), g: random(255), b: random(255)};
	}

  createStar() {
    let rand = coinToss();
    if(rand == 0) {
      fill(this.starColor.r, this.starColor.g, this.starColor.b);
      ellipse(this.starX, this.starY, this.starSize);
    }
  }

  sMove() {
      this.starX -= this.starSpeed;
  }
}
