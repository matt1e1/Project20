
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine, world;
var ball, ground;

function setup (){
 var canvas= createCanvas(400,400);

engine=Engine.create();
world=engine.world;

var options={
    restitution:1.0
}
ball=Bodies.circle(200,200,20,options);
World.add(world,ball);
}

function draw(){
background(0);
Engine.update(engine);
ellipseMode (RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);


}




