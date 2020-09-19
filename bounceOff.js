var fixedRect,movingRect;

function setup() {
    createCanvas(800,400);
   fixedRect = createSprite(400, 200, 50, 50);
   movingRect = createSprite(600,200,80,50);
  
   fixedRect.velocityX = 2;
   movingRect.velocityX = -2;


   fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";
  
  }
  
  function draw() {
    background(0); 
    
   
  
    if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
      movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 )
      
        {

    fixedRect.velocityX = (-1)*fixedRect.velocityX;
    movingRect.velocityX = (-1)*movingRect.velocityX;      
    
    }
   
  
    
  
    drawSprites();
  
  }