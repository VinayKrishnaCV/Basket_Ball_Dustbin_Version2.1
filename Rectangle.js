class Rectangle {
    constructor(x,y,width,height,condition){
        this.width = width;
        this.height = height;
        var options={
            isStatic:true,
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        console.log(this.body);
        this.rectOrimage=condition;
        this.image=loadImage("dustbin.png");
    }

    display(){
        var pos=this.body.position
        if(this.rectOrimage===1){
            imageMode(CENTER);
            image(this.image,pos.x,560,this.width,200);
        }
    }
}