// write your codes here
//no😒



function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(CENTER,CENTER);
}
let xpos=0
let xspeed=0
function draw(){

background(100);

// push();
// translate(xpos,height/2)

text("Bounce",width/2 +xpos,height/2)
if (xpos<-100){
xspeed=-10
}
xpos-=xspeed
xspeed+=0.1
// pop();


}

