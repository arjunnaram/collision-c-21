var fixedRect, movingRect;
var p1,p2,p3,p4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  p1=createSprite(100,100,50,50);
  p1.shapeColor="green";

  p2=createSprite(200,100,50,50);
  p2.shapeColor="green";

  p3=createSprite(300,100,50,50);
  p3.shapeColor="green";

  p4=createSprite(400,100,50,50);
  p4.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,p4)){
  movingRect.shapeColor = "red";
  p4.shapeColor = "red"

}
else{
  movingRect.shapeColor = "green";
  p4.shapeColor = "green";


}


  
  drawSprites();
}


function isTouching(p1,p2) 
{ if ( p1.x-p2.x < p1.width/2 + p2.width/2 &&
   p2.x - p1.x < p1.width/2 + p2.width/2 &&
    p1.y-p2.y < p1.height/2 + p2.height/2 &&
     p2.y - p1.y < p1.height/2 + p2.height/2) 
     { return true; 
    } 
    else
     { 
       return false; 
      }
       }
