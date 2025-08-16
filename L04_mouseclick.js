function setup() {

  createCanvas(1000,1000);
  background(100);
}


var r=Math.random()*255
var g=Math.random()
function draw(){
    fill(r,0,0);
    ellipse(500,500,500,500);
}

function mousePressed(){
    r=Math.random()*255;
}

function mouseReleased(){
    r=Math.random()*255;
}


