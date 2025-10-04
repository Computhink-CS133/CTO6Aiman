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
function preload() {

    sfx = loadSound("assets/star_wars_theme_8_bit.mp3");
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
for(let i=0;i<storyText.length;i++){
    text(storyText[i],0,50*i+movepos);
}

pop();
movepos-=0.3;

}
// function mousePressed(){
//     if (!audiostarted?){
//     audiostarted=true
//     }
//     else(){
//         bgmusic.loop();
//         audiostarted=false
//     }
// }