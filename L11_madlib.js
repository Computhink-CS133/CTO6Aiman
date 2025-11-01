let inputField;
let sumbit;
function setup() {
    createCanvas(600,400);
    background(220);
    inputField = createInput();
    inputField.position(200,height-80);
    inputField.input(updatetext);
    sumbit = createButton("Show");
    sumbit.position(inputField.x+10,inputField.y)
    sumbit.mousePressed(displayInput);
}
function draw() {

    textSize(16);
    textAlign(CENTER,CENTER);
    fill(0);
    text(sumbit,250,150);
}
function displayInput() {
    inputField = this.value();
    text(sumbit,250,150);
}