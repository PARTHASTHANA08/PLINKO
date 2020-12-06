class PARTICLE{
    constructor(x,y,radius1,radius2){
        var options = {
         restitution:1
        }
        this.body = Bodies.ellipse(x,y,radius1,radius2,options);
       this.radius1 = radius1;
       this.radius2 = radius2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        this.color = this.color(random(255,0,0) , random(0,255,0) , random(0,0,255));
        ellipse(pos.x,pos.y,this.radius1,this.radius2);
    }
}