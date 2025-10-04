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
let movepos=200;
let audiostarted = false;
let bgmusic;
let started=false
function preload() {

    bgmusic= loadSound("assets/star_wars_theme_8_bit.mp3");
}

function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(CENTER,CENTER);
}

function draw(){

background(100);

push();
translate(width/2,movepos);
scale(1.5,2);
if (started){
for(let i=0;i<storyText.length;i++){
    text(storyText[i],0,50*i+movepos);
}
}
else{
    text("Click to start",0,0);
}

pop();
movepos-=0.3;

}
function mousePressed(){
    if (!audiostarted) {
    audiostarted=true;
    bgmusic.loop()
    }
    else{
        bgmusic.stop();
        audiostarted=false;
    }
    started=true
}