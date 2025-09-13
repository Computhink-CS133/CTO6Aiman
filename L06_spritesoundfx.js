var xvel=0
var yvel=0
var speed=0.1
var rectsize = 10


var x = 200
var y = 200

function setup(){
  createCanvas(400,400);
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
  
    yvel+=speed;
  }

  if(keyIsDown(UP_ARROW ))
  {
   
    yvel-=speed;
  }
rect(width/2 - rectsize/2,height/2 - rectsize/2,x,y)
 
  x+=xvel;
  y+=yvel;
  xvel*=0.9;
  yvel*=0.9;
  x=constrain(x,0,300);
  y=constrain(y,0,300);
  
}
