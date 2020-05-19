class Star {
    constructor() {
        this.starX = random(w);
        this.starY = random(h);
        this.starSize = random(10);
		this.starColor = this.randomColor();
    }

	randomColor() {
		return {r: random(255), g: random(255), b: random(255)};
	}

	starFill(color) {
	}

  create() {
  fill(this.starColor.r, this.starColor.g, this.starColor.b);
      ellipse(this.starX, this.starY, this.starSize);
  }

  sMove() {
      this.starX -= speedP;
  }

  asign() {
    this.starX = width +5;
    this.starY = random(h);
  }
}
