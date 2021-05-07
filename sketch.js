const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world,boy;
var boomerang, zombie;
var gameState="onsling"
var boy,throwobj
var launchingForce = 100

function preload(){
boy= loadImage("Boy1.png")
//boomerangImg=loadImage("Boomerang.png")
zombieImg = loadImage("Zombie.png")
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;


var ground_options={'isStatic': true}
ground=Bodies.rectangle(400,390,800,10,ground_options)
World.add(world,ground)


zombie = new Boy(700,310,90,90)



boomerang= new Boomerang(150,360,40)

throwobj = new BoomerangEffect(boomerang.body,{x:150,y:362})



}

function draw() {  
  background("cyan"); 
  textSize(40)
  text("Human vs Zombies",width/3,50) 
Engine.update(engine)

image(boy,100,305,90,90)
//image(boomerangImg,100,150,15,15)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
boomerang.display();

zombie.display()

//throwobj.display()
  drawSprites();
}

function mouseReleased(){
  throwobj.fly();
  //removing the bird that flew from the array
  
  //gameState = "launched";
}

//attaching new bird when space is pressed and when in launched state
function keyPressed(){
  if(keyCode === 32 /*&& gameState === "launched"*/){
      Matter.Body.setPosition(boomerang.body,{x:235,y:320})
      boomerang.attach();
      //gameState="onSling";
  }
}


function mouseDragged(){
  Matter.Body.setPosition(boomerang.body,{x:mouseX,y:mouseY})
}


