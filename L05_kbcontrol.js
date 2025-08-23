function setup() {

  createCanvas(1000,1000);
  background(100);
}
var size=5
function mouseDragged()
{
    ellipse(mouseX,mouseY,size,size)
}