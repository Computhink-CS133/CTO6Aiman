// write your codes here
//no :)
let ballx=300;
let bally =200;
const ballSize=30;
let ballxvel=50;
let ballyvel=50;
function setup(){
createCanvas(600,400);
background(200);
}
function draw(){
noStroke();
ballx+=ballxvel;
bally+=ballyvel;
circle(ballx,bally,ballSize);
if (ballx - ballSize/2 <=0 || ballx + ballSize/2 >= width ){
    ballxvel *= -1;
    fill(Math.random()*255,Math.random()*255,Math.random()*255)
}
if (bally - ballSize/2 <=0 || bally + ballSize/2 >= height){
    ballyvel *= -1;    
    fill(Math.random()*255,Math.random()*255,Math.random()*255)
}
}

