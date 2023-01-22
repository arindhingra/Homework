
function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 15, 30)

}

function draw() {
  background("yellow");
  if (keyIsDown(RIGHT_ARROW)) {
    background("red")
  };
  
  drawSprites()
}




