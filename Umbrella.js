class Umbrella {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            density: 0.001
        }
       // this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png");
        this.umbrella = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

   /* display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }*/
}
