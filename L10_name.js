function setup(){
    createCanvas(400,400);
    background();
}
let lastsecond =second();
let countdown = 60;
function draw(){
    if (!lastsecond===second()){
        countdown-=1;
        lastsecond=second();

    }
background(100);
}