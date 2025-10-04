let storyText = [
"A long time ago in a galaxy far,",
"far away...",
"",
"EPISODE I",
"THE BEGINNING",
"",
"It is a period of learning...",
"Students have begun their journey",
"into the world of p5.js.",
"With newfound powers, they",
"create amazing visuals and",
"animations...",
"",
"May the Code be with you!"
];
function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(BOTTOM);
}
let movepos=0
function draw(){

background(100);
for(let i=0;i<storyText.length;i++){
  
    text(storyText[i],50,50*i+movepos);

  
}
movepos-=0.3

}