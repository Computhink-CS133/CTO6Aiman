function setup() {

  createCanvas(1000,1000);
  background(100);
}
var size=5
function mouseDragged()
{
    fill(Math.random()*255,Math.random()*255,Math.random()*255,)
    ellipse(mouseX,mouseY,size,size)
}