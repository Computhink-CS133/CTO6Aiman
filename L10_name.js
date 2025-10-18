function setup(){
    createCanvas(400,400);
    background(100);
}
let lastsecond =second();
let countdown = 60;
function draw(){
    if (!lastsecond===second()){
        countdown-=1;
        lastsecond=second();
    }
}