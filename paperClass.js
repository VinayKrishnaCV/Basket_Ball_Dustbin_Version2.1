class Paper  {
    constructor(x,y,radius)   {
        var options = {
            isStatic: false,
            restitution: 0.8,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius
        this.image=loadImage("paper.png");

    }

    display()   {
        var diameter=this.radius*2
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,diameter+15,diameter+15);
    }
}