function setup() {

  createCanvas(1000,1000);
  background(100);
}


var r=Math.random()*255;
var g=Math.random()*255;
var b=Math.random()*255;
var x=Math.random()*1000;
var y = Math.random()*1000;
function draw(){
    fill(r,g,b);
    ellipse(x,y,500,500);
}

function mousePressed(){
    r=Math.random()*255;
    g=Math.random()*255;
    b=Math.random()*255;
 y = Math.random()*1000;
     x = Math.random()*1000;
}

function mouseReleased(){
    r=Math.random()*255;
    g=Math.random()*255;
    b=Math.random()*255;
}


