class Star {
    constructor() {
        this.starX = random(w);
        this.starY = random(h);
        this.starSize = random(10);
        fill(random(255), random(255), random(255));
    }

    create() {
        ellipse(this.starX, this.starY, this.starSize);
    }

    sMove() {
        this.starX -= 3;
    }
}
