function setup() {

  createCanvas(600,1000);//(spacehahah*num)*2, spacehahah*num
  background(100);

  }
var size=5;
function mouseDragged()
{
    fill(Math.random()*255,Math.random()*255,Math.random()*255);
    
    ellipse(mouseX,mouseY,size,size);
    size+=5;
}

function mousePressed(){
    size=5;
}