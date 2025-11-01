let inputField;
let sumbit;
function setup() {
    createCanvas(600,400);
    background(220);
    inputField = createInput();
    inputField.position(200,height-80);
    inputField.input(updatetext);
    sumbit = createButton("Sumbit");t
    sumbit.position(inputField.x+50,inputField.y+inputField.heigh);
    sumbit.mousePressed(displayInput);
}