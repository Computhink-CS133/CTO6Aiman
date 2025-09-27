// write your codes here
//no :)
let ballx=300;
let bally =200;
const ballSize=30;
let ballxvel=100;
let ballyvel=100;
function setup(){
createCanvas(600,400);
background(200);
}
function draw(){

ballx+=ballxvel;
bally+=ballyvel;
background(200);
circle(ballx,bally,ballSize);
if (ballx - ballSize/2 <=0 || ballx + ballSize/2 >= width ){
    ballxvel *= -1;
}
if (bally - ballSize/2 <=0 || bally + ballSize/2 >= height){
    ballyvel *= -1;
}
}

