// write your codes here
//no😒



function setup(){
createCanvas(1000,800);
background(100);
textSize(100);
textAlign(CENTER,CENTER);


}
let countdown 
function settimer(){
    let timer = 10
    for (let i = 10;i<1;i++){
    timer=i
    return timer
    }
}
function mousePressed(){
countdown = setInterval(settimer,1000);
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
