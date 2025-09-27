// write your codes here
//no :)
let ballx=300;
let bally =200;
const ballSize=30;
let ballxvel=2;
let ballyvel=2;
function setup(){
createCanvas(600,400);
background(200);
}
function draw(){
ballx+=ballxvel;
bally+=ballyvel;
background(200);
circle(ballx,bally,ballSize);
if (ballx - ballSize/2 <=0 || ballx + ballSize/2 <=width ){
    ball
}
}

