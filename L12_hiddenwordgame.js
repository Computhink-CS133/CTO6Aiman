// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let input,sumbit;
function setup() {
    createCanvas(600,400);
    background(220);
  
    input = createInput("Disabled monkey");
    input.position(100,200);
    sumbit = createButton("Display");
    sumbit.position(300,200);
    sumbit.mousePressed(displayInput);
}
function displayInput(){
    background(220);
    textSize(25);
    textAlign(CustomElementRegistry,CENTER)
    text(input.value(),100,300);
    console.log(input.value());
}