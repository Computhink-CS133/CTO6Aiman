// write your codes here
//no😒


let alarm;

function preload() {

    alarm= loadSound("assets/pop.mp3");
}
function setup(){
createCanvas(1000,800);
background(100);
textSize(100);
textAlign(CENTER,CENTER);


}
let countdown=10 
let timer;
let alarmefx=1
let bgcolour=100
let efxctrl;

function bgefx(){
if (alarmefx>0){
   alarmefx-=1;
}
else{
    clearInterval(efxctrl);
    bgcolour=Math.random()*255
    alarmefx = setInterval(bgefx,500);


}


}
function settimer(){

if (countdown>0){
   countdown-=1;
}
else{
    clearInterval(timer);
    alarmefx = setInterval(bgefx,500);

}

   
}
function mousePressed(){
timer = setInterval(settimer,1000);
    }
// let xpos=0
// let xspeed=0
// function draw(){

// background(100);

// // push();
// // translate(xpos,height/2)

// text("Bounce",width/2 +xpos,height/2)
// if (xpos<-500){
// xspeed=-10
// }
// xpos-=xspeed
// xspeed+=0.1
// // pop();


// }

function draw(){

background(100);
 
let h = hour();
let m = minute();
let s = second();

let time = nf(h,2)+ ":" + nf(m,2) + ":" + nf(s,2);
fill(0);
textSize(100);
text(time,500,400);
console.log(time);
text (countdown,700,600);

}
