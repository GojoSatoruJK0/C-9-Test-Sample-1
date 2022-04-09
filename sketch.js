var box
function setup() {
 createCanvas(1000,1000);
box=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
if(keyDown(UP_ARROW)){
box.position.y=box.position.y-2
}
if(keyDown(DOWN_ARROW)){
box.position.y=box.position.y+2
}
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-2
}
if(keyDown(RIGHT_ARROW)){
box.position.x=box.position.x+2
}
drawSprites()
}




