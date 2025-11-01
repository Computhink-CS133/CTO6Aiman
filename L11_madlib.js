let inputField;
let sumbit;
function setup() {
    createCanvas(600,400);
    background(220);
    inputField = createInput();
    inputField.position(200,height-80);
    inputField.input(updatetext);
    sumbit = createButton("Sumbit");
    sumbit.position(inputField.x+input,inputField.y+50);
    sumbit.mousePressed(displayInput);
}