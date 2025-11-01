let inputField;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
    inputField = createInput();
    inputField.position(200,height-80);
    submitButton = createButton("Show");
    submitButton.position(inputField.x+200,inputField.y)
    submitButton.mousePressed(displayInput);
}
function draw() {

    textSize(16);
    textAlign(CENTER,CENTER);
    fill(0);
    text(sumbit,300,200);
}
function displayInput() {
    inputField = this.value();
    text(sumbit,250,150);
}