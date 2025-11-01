// function setup(){
//     createCanvas(400,400);

// }
// let inputtext,updatetext;
// function setup(){
//     createCanvas(400,400);
//     inputtext=createInput();
//     background(100);
//     inputtext.position(100,300);
//     inputtext.input(updatetext);
// }
// function draw(){
//     textsize(28)
//     updatethetext(updatetext)
//     background(100);
//     text(updatetext,200,200);

// }
// function updatethetext(text) {
//     updatetext=inputtext
// }
let nameInput;
let ageInput;
let ColourPicker;

function setup() {
    createCanvas()
    ColourPicker = createColorPicker("#ff0000ff")
    ColourPicker.position(200,32);

}
function draw() {
    textSize(16);
    textAlign(LEFT);
    
}