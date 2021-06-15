const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var rand;
var brad, bradImg;
 var drops;
 var rainDrops= [];
var maxDrops = 100;
var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");

    bradImg = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")                    
   
    bradImg2 = loadAnimation("Walking Frame/batman.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(700,700);

    brad = createSprite(0,500);
    brad.addAnimation("bradWalking",bradImg);
    brad.addAnimation("Batman",bradImg2)
    brad.scale =0.5;
    //brad.velocityX = 1;
    umbrella = new Umbrella(50,200,10);

    invisibleBody = Bodies.rectangle(175,350,150,10,{isStatic:true});
    World.add(world,invisibleBody)
    //create drops
    
        
        
    
   


    var render = Matter.Render.create({
        element : document.body,
        engine : engine,
        options : {
            width : 700,
            height :700,
            wireframes : false
        }
    });

    Matter.Render.run(render)
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    ///creating raindrops
    if(frameCount % 10 === 0){

        for(var i =0; i< maxDrops;i++){
            drops = new Rain(random(-10,700),random(0,300));
            rainDrops.push(drops)
        }
    }
   
    
   
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    
    
    
   // umbrella.display();

    //display rain drops
  for(var  i=0 ; i< rainDrops.length ;i++){
      rainDrops[i].display();
      rainDrops[i].update();
  }

  // raindrops update

 // Rain.update();

  // Batman Begins

  if( brad.x > 170){
      brad.changeAnimation("Batman",bradImg2);
      brad.velocityX = 0;
  }

    drawSprites();
}   
 function keyPressed(){
     if(keyCode===RIGHT_ARROW){
         brad.velocityX = 3;
         Matter.Body.setVelocity(umbrella.body,{x: 10, y : 0})
     }
 }

