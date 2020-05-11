class Star {
    constructor() {
        this.starX = random(w);
        this.starY = random(h);
        this.starSize = 10;
        console.log("etoile crée en "+ this.starX)
    }

    create() {
        fill(random(255), random(255), random(255));
        ellipse(this.starX, this.starY, this.starSize);
    }

    sMove() {
        this.starX -= 3;
    }
}
