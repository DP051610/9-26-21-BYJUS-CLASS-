var box
function setup() {
  createCanvas(500,500);
  box = createSprite(100,100,100,100)
  
}
function draw() 
{
  background(30);
drawSprites()
if (keyDown(DOWN_ARROW)){
  box.y = box.y+5
}
if (keyDown(UP_ARROW)){
  box.y = box.y - 5 
}
if (keyDown(LEFT_ARROW)){
  box.x = box.x -5
}
if (keyDown(RIGHT_ARROW)){
  box.x = box.x + 5
}
}




