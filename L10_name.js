// function setup(){
//     createCanvas(400,400);

// }
let inputtext,up;
function setup(){
    createCanvas(400,400);
    inputtext=createInput();
    background(100);
    inputtext.position(100,300)
}
function draw(){
    text(inputtext,200,200);
    background(100);
}