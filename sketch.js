const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;




var ball;
var blower;
var blowerMouth;
var button;



function setup() {
  createCanvas(800,400);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  
  blower = new Blower(300,280,200,21)
  ball = new Ball(455,250,70);
  blowerMouth = new BlowerMouth(455,236,110,110)

 
}

function draw() {
  background(232,232,25);
  
  button = createButton("Click To Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
 

   
 
 ball.Show() 
 blower.Show()
blowerMouth.Show()
  
  
}


function blow() {
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}






