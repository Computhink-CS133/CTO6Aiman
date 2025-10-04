// write your codes here
//no😒



function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(CENTER,CENTER);
}

function draw(){

background(100);
let xpos=width
push();
translate(width/2,xpos)
xpos-=1
text("Bounce",width/2,height/2)

pop();
}

