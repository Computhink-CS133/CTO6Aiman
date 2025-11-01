let inputField;
let sumbit;
function setup() {
    createCanvas(600,400);
    background(0);
    inputField = createInput();
    inputField.position(200,height-80);
    inputField.input(updatetext);
    sumbit = createButton();
    sumbit.position(250,height-80);
}