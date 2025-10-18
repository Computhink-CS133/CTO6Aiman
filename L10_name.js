let bgcolour1=Math.random()*255;
let bgcolour2=Math.random()*255;
let bgcolour3=Math.random()*255;
let interval;
function setup(){
    createCanvas(400,400);
    background(bgcolour1,bgcolour2,bgcolour3);

}

let countdown = 60;
function draw(){
    interval=setInterval(countdownfunc,1000);
background(bgcolour1,bgcolour2,bgcolour3);
console.log(countdown);
}
function countdownfunc(){
    if (countdown>0){
    bgcolour1=Math.random()*255;
    bgcolour2=Math.random()*255;
    bgcolour3=Math.random()*255;
    countdown-=1
    }
    else{
        clearInterval(countdown);

    }
}