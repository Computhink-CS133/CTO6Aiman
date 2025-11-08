// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let input,sumbit
function setup() {
    createCanvas(600,400);
    background(220);
  
    input = createInput("Disabled monkey");
    input.position(300,200);
    sumbit = createButton("Display");
    sumbit.position(500,200);
    sumbit.mousePressed(displayInput);
}
function displayInput(){
    text(input.value(),300,300);
}