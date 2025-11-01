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
    text(inputField,300,200);
    console.log(submitButton)
}
function displayInput() {
    inputField = this.value();


}