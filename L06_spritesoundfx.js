var xvel=0
var yvel=0
var speed=1


var x = 500
var y = 500

function setup(){
  createCanvas(1000,1000);
  background(100);
}
function draw() {
  
  background(100);
  if(keyIsDown(RIGHT_ARROW ))
  {
    
    xvel+=speed;
  }

  if(keyIsDown(LEFT_ARROW ))
  {
    xvel-=speed;
  }
    if(keyIsDown(DOWN_ARROW ))
  {
    dir="down"
    yvel+=speed;
  }

  if(keyIsDown(UP_ARROW ))
  {
    dir="up"
    yvel-=speed;
  }
  if(dir==="down"){
    triangle(x-100,y,x,y+100,x+100,y);
  }
  else if(dir==="up"){
      triangle(x-100,y,x,y-100,x+100,y);
  }
  x+=xvel;
  y+=yvel;
  xvel*=0.9;
  yvel*=0.9;
  x=constrain(x,50,950);
  y=constrain(y,50,950);
  
  
  if(keyIsDown(SHIFT)){
    speed=5
  }
  else{
    speed=1
  }
}
