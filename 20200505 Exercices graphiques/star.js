class Star {
    constructor() {
        this.starX = random(w);
        this.starY = random(h);
        this.starSize = random(7);
		this.starColor = this.randomColor();
    }

	randomColor() {
		return {r: random(255), g: random(255), b: random(255)};
	}

  create() {
    let rand = Math.floor((Math.random() * 2));
    console.log(rand);
    if(rand === 0) {
      fill(this.starColor.r, this.starColor.g, this.starColor.b);
      ellipse(this.starX, this.starY, this.starSize);
    } else {
    }
  }

  sMove() {
      this.starX -= speedP;
  }

  asign() {
    //fill(this.starColor.r, this.starColor.g, this.starColor.b); à clarifier
    this.starX = width +5;
    this.starY = random(h);
  }
}
