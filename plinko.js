class PLINKO{
    constructor(x,y,radius1,radius2){
        var options ={
            isStatic:true
        }
    this.body = Bodies.rectangle(x,y,radius1,radius2,options);
    this.radius1 = 10; 
    this.radius2 = 10;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        elpise(pos.x,pos.y,10,10);
    }
}