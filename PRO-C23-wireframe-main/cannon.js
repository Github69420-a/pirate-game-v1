class Cannon {
    constructor(x, y, w, h, angle) {
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.angle = angle;
        //this.image = loadImage("assets/CANNON.png");
    }
    display() {
        fill("grey");
        push();
        translate(this.x + 25, this.y - 50);
        rotate(this.angle);
        rect(-10, -20, this.w - 100, this.h - 75);
        //image(this.image, -10, -20, this.w - 100, this.h - 75);
        pop();
        arc(this.x, this.y, this.w, this.h, PI, TWO_PI);
        noFill();
    }
}