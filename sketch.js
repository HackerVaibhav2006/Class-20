var fixedRect , movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,60)
  fixedRect.shapeColor = "green" ;
  movingRect = createSprite(200,200,50,80)
  movingRect.shapeColor = "green" ;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect/2){
     movingRect.shapeColor = "red" ;
     fixedRect.shapeColor = "red" ; 
     console.log("hello");
    }
  else{
    movingRect.shapeColor = "green" ;
    fixedRect.shapeColor = "green"  ;
  }



  drawSprites();
}