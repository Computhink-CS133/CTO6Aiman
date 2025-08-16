function setup() {

  createCanvas(1000,1000);
  background(100);
}
var colour="blue";

var r=Math.random()*255
function draw(){
    fill(r,0,0);
    ellipse(500,500,500,500);
}

function mousePressed(){
    r="red";
}

function mouseReleased(){
    r="blue";
}


