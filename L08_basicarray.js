// write your codes here
//n0 :)
let obj={k:1,c:2,d:3}
let squarex=300;
let squarey =200;
const squareSize=30;
let squarexvel=10;
function setup(){
createCanvas(6000,300);

}
function draw(){
noStroke();
squarex+=squarexvel;
background(200);
rect(squarex - squareSize/2,squarey - squareSize/2,squareSize,squareSize);

if (squarex - squareSize/2 <=0 || squarex + squareSize/2 >= width ){
    squarexvel *= -1;
    fill(Math.random()*255,Math.random()*255,Math.random()*255);
    squarexvel*=2;

}

}



