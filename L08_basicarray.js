// write your codes here
//n0 :)
let obj={k:1,c:2,d:3}
let squarex=300;
let squarey =200;
const squareSize=30;
let squarexvel=2;
let squareyvel=0;
function setup(){
createCanvas(6000,4000);

}
function draw(){
noStroke();
squarex+=squarexvel;
squarey+=squareyvel;
background(200);
rect(squarex - squareSizeSize/2,squarey - squareSize/2,squareSize,squareSize);

if (squarex - squareSize/2 <=0 || sqx + ballSize/2 >= width ){
    ballxvel *= -1;
    fill(Math.random()*255,Math.random()*255,Math.random()*255);

}

}



