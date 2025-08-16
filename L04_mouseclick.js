function setup() {

  createCanvas(1000,1000);
  background(100);
}
var colour="blue";

function draw(){
    fill(colour);
    circle(500,500,500);
}

function mousePressed(){
    colour="red";
}
function mouseReleased(){
    colour="blue";
}
addEventListener()

