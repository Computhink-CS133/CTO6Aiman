// 😒
let bgcolour1=Math.random()*255;
let bgcolour2=Math.random()*255;
let bgcolour3=Math.random()*255;
let interval;
let contdownstarted=false
function setup(){
    createCanvas(400,400);
    background(bgcolour1,bgcolour2,bgcolour3);

}

let countdown = 60;

function countdownfunc(){
    contdownstarted=true;
    if (countdown>0&& contdownstarted){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    bgcolour1=Math.random()*255;
    bgcolour2=Math.random()*255;
    bgcolour3=Math.random()*255;
    countdown-=1;
    
    }
    else{
        clearInterval(interval);

    }

}




































































function draw(){
    
    if(!contdownstarted){
    interval=setInterval(countdownfunc,1000);
    }
background(bgcolour1,bgcolour2,bgcolour3);
console.log(countdown);
}
