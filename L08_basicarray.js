// write your codes here
//n0 :)
let obj={k:1,c:2,d:3}
let ballx=300;
let bally =200;
const ballSize=30;
let ballxvel=2;
let ballyvel=0;
function setup(){
createCanvas(6000,4000);
background(200);
}
function draw(){
noStroke();
ballx+=ballxvel;
bally+=ballyvel;
rect(ballx - ballSize/2,bally - ballSize/2,ballSize,ballSize);
if (ballx - ballSize/2 <=0 || ballx + ballSize/2 >= width ){
    ballxvel *= -1;
    fill(Math.random()*255,Math.random()*255,Math.random()*255)
}
if (bally - ballSize/2 <=0 || bally + ballSize/2 >= height){
    ballyvel *= -1;    
    fill(Math.random()*255,Math.random()*255,Math.random()*255)
}
}
function keyPressed(){
    if (keyCode===UP_ARROW){
        ballxvel*=2;
        ballyvel*=2;
    }
    if (keyCode===DOWN_ARROW){
        ballxvel*=0.5;
        ballyvel*=0.5;
    }
console.log("Speed: "+ Math.abs(ballxvel))
}
