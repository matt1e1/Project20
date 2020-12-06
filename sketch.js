var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,600);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(400,400,50,30);
  movingRect.shapeColor="brown";

 //movingRect.velocityX=2;
 //fixedRect.velocityX=-2

  gameObject1=createSprite(200,200,50,50);
 gameObject1.velocityX=1

  gameObject2=createSprite(400,200,50,50);
  gameObject2.velocityX=-1
}

function draw() {
  background(255,255,255);  

  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

 bounceOff(gameObject1, gameObject2)

 if(isTouching(movingRect, fixedRect)){
  fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
   }
  

   else{
 ficedRect.shapeColor="red";
    movingRect.shapeColor="brown";
   }
  drawSprites();
}


if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}


function bounceOff(object1, object2){
if(object1.x-object2.x<object1.width/2 + object2.width/2
  && object2.x-object1.x<object1.width/2 + object2.width/2 ){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
  if(object1.y-object2.y<object1.height/2 + object2.height/2
    && object2.y-object1.y<object1.height/2 + object2.height/2 ){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }

}
