// write your codes here
//no😒



function setup(){
createCanvas(1000,800);
background(100);
textSize(50);
textAlign(CENTER,CENTER);
}
let xpos=width
function draw(){

background(100);

push();
translate(xpos,height/2)

text("Bounce",width/2,height/2)

pop();
xpos-=1
}

