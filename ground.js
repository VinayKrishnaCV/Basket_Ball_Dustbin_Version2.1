class Ground{
    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
        var options={
            isStatic : true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        fill(105,63,25);
        stroke(1);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}