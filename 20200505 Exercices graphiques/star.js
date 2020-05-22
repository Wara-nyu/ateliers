class Star {
    constructor() {
      this.newStar(random(w));
      this.starSpeed = random(2) + 1;
    }

  newStar(x = width + 5) {
    this.starX = x;
    this.starY = random(h);
    this.starSize = random(10);
    this.starColor = this.randomColor();
  }

	randomColor() {
		return {r: random(255), g: random(255), b: random(255)};
	}

  create() {
    let rand = Math.floor((Math.random() * 2));
    if(rand === 0) {
      fill(this.starColor.r, this.starColor.g, this.starColor.b);
      ellipse(this.starX, this.starY, this.starSize);
    }
  }

  sMove() {
      this.starX -= this.starSpeed;
  }
}
