// function setup()
// {
//   createCanvas(1000,1000);
//   background(100);
//   noStroke()
// }
// // var size=5;
// function draw(){
// circle(500,500,500)
// }
//     function mouseDragged()
// {
//     ellipse(mouseX,mouseY,size,size);
//     size+=0.2;
// }

//     function mousePressed(){
//     size=5;
//     fill(Math.random()*255,Math.random()*255,Math.random()*255);
// }














































































































































































































































































// function setup()
// {
//   createCanvas(1000,1000);
//   background(100);
//   noStroke();
// }

// function draw(){
// for(var i=0;i<5;i++){
//     fill(75*i);
//     circle(50+200*i,50+200*i,250);
// }
// }




















































































































































































































// function setup()
// {
//   createCanvas(1000,1000);
//   background(100);
//   noStroke();
// }

// function draw(){



// }
// function keyPressed(){
//     for(var i = 0;i<Math.random()*20;i++){
//         fill(Math.random()*255,Math.random()*255,Math.random()*255);
//         circle(Math.random()*1000,Math.random()*1000,Math.random()*200);
//     }
// }
// function keyReleased(){
//         background(100);
// }































































































































































var xvel=0
var yvel=0


var x = 500
var y = 500

function setup(){
  createCanvas(1000,1000);
  background(100);
}
function draw() {
  background(100);
  if(keyIsDown(RIGHT_ARROW))
  {
    
    xvel+=1
  }
    background(100);
  if(keyIsDown(LEFT_ARROW))
  {
    xvel-=1;
  }
    if(keyIsDown(DOWN_ARROW))
  {
    
    yvel+=1
  }
    background(100);
  if(keyIsDown(UP_ARROW))
  {
    yvel-=1;
  }
  circle(x,y,100);
  x+=xvel;
  y+=yvel;
  xvel*=0.8;
  yvel*=0.8;
}
















































































