let bgcolour1=Math.random()*255;
let bgcolour2=Math.random()*255;
let bgcolour3=Math.random()*255;
function setup(){
    createCanvas(400,400);
    background(bgcolour1,bg);

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