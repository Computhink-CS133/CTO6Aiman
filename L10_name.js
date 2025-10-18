// function setup(){
//     createCanvas(400,400);

// }
let inputtext,updatetext;
function setup(){
    createCanvas(400,400);
    inputtext=createInput();
    background(100);
    inputtext.position(100,300)
    inputtext.input
}
function draw(){
    text(inputtext,200,200);
    background(100);
}