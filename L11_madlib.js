let inputField;
let sumbit;
function setup() {
    createCanvas(600,400)
    background(100)
    inputField = createInput('Name');
   inputField.position(200,height-80);
    usertext.input(updatetext);
}