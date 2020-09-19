var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(600,300,80,50);

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";

}

function draw() {
  background(0); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2)
      {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  

  drawSprites();

}