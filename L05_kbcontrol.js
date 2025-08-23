function setup()
{
  createCanvas(1000,1000);
  background(100);
  noStroke()
}
var size=5;
function draw(){
    function mouseDragged()
{
    ellipse(mouseX,mouseY,size,size);
    size+=0.5;
}

    function mousePressed(){
    size=5;
    fill(random(255),);
}
}