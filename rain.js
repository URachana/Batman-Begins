class Rain{
    constructor(x,y){
        var options = {
            density : 0.3,
            friction :0.1,
            restitution :1.5           

        }

        this.rain = Bodies.circle(x,y,2,options);
        World.add(world,this.rain);
        this.r = 2;
    }

    display(){

        var pos = this.rain.position
        var angle = this.rain.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("aqua");
        ellipse(0,0,this.r,this.r);
        pop();
    }

     update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,700),y:random(0,100)})
        }
        
    }
}