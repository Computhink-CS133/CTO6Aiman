// write your codes here
//n0 :)
let obj={k:1,c:2,d:3}
let ballx=300;
let bally =200;
const ballSize=30;
let ballxvel=2;
let ballyvel=0;
function setup(){
createCanvas(600,400);

}
function draw(){
noStroke();
ballx+=ballxvel;
bally+=ballyvel;
rect(ballx - ballSize/2,bally - ballSize/2,ballSize,ballSize);
background(200);
if (ballx - ballSize/2 <=0 || ballx + ballSize/2 >= width ){
    ballxvel *= -1;

}
if (bally - ballSize/2 <=0 || bally + ballSize/2 >= height){
    ballyvel *= -1;    

}
}


