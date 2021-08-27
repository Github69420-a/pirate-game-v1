class Tower {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/tower.png");
        var toweroptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, toweroptions);
    }
    
    display() {
        //rectMode(CENTER);
        //image(this.body.position.x, this.body.position.y, this.w, this.h);
        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.w,  this.h);
        pop();
    }
}