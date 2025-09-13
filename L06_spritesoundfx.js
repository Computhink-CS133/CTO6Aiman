// var xvel=0;
// var yvel=0;
// var speed=0.1;
// var rectsize = 10;
// var colour = 50;


// var x = 200;
// var y = 200;

// function setup(){
//   createCanvas(400,400);
//   background(100);
// }
// function draw() {
  
//   background(100);
//   if(keyIsDown(RIGHT_ARROW ))
//   {
    
//     xvel+=speed;
//   }

//   if(keyIsDown(LEFT_ARROW ))
//   {
//     xvel-=speed;
//   }
//     if(keyIsDown(DOWN_ARROW ))
//   {
  
//     yvel+=speed;
//   }

//   if(keyIsDown(UP_ARROW ))
//   {
   
//     yvel-=speed;
//   }
// rect(x - rectsize,y- rectsize,rectsize,rectsize);

// if(keyIsDown===32){
//     colour = 200;
// }
// else{
//     colour = 50;
// }
//   x+=xvel;
//   y+=yvel;
//   xvel*=0.9;
//   yvel*=0.9;
//   x=constrain(x,100,300);
//   y=constrain(y,100,300);
  
// }



















































































































































































































































































































































































var staticimage,sfx;

function preload() {
    staticimage = loadImage("assets/pico-a.png");
    sfx = loadSound("assets/pop.mp3")
}

function setup() {
    createCanvas(200,200);
    background("lightblue");
    image(staticimage,0,0,200,200);
    
}
console.log(":)")
function keyPressed() { 
    if(keyCode === 32 )
    {
        sfx.play()
    }
}