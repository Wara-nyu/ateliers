class Star {
    constructor() {
        this.starX = random(w);
        this.starY = random(h);
        this.starSize = /*random(7)*/ 15;
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
      this.starX -= speedP;
  }

  asign() {
//    this.starColor.r = random(255);
//    this.starColor.g = random(255);
//    this.starColor.b = random(255);
    fill(this.starColor.r, this.starColor.g, this.starColor.b);
    this.starX = width +5;
    this.starY = random(h);
  }
}
