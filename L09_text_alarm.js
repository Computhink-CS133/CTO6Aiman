// write your codes here
//no😒



function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(CENTER,CENTER);


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
let h = hour();
let m = minute();
let s = second();
let time = nf(h,2)+":"+nf()
h = hour();
m = minute();
s = second();
time = h + ":"+ m + ":" + s;
text(500,400,time);
background(100);
console.log(time)
}
