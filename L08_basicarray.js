// write your codes here
//n0 :)
let obj={k:1,c:2,d:3}
// let squarex=300;
// let squarey =200;
// const squareSize=30;
// let squarexvel=2;

let favfood=["Monke","Cavemen","Dog","Grep","langur","mus","pizarea","piizaman","colddog"];
function setup(){
createCanvas(6000,4000);
background(100);
textSize(500);
textAlign(LEFT,TOP);
}
let movepos=0
function draw(){

background(100);
for(let i=0;i<favfood.length;i++){
  
    text(favfood[i],50+movepos,500*i+movepos);

  
}
movepos+=1

}





