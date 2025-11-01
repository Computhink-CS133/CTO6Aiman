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
let usertext;

function setup() {
    createCanvas(600,400);
    ColourPicker = createColorPicker("#ff0000ff");
    ColourPicker.position(200,32);
    usertext = createInput();
    usertext.position(200,height-80);
    usertext.input(updatetext);
    ageInput = createInput();
    ageInput.position(200,height-50);
    ageInput.input(updatetext);

    

}
function draw() {
    background(ColourPicker.value());
    textSize(16);
    textAlign(LEFT);

    text("Pick a colour",20,50);
    fill(255);
    rect(50,100,500,160,50,50,50,50);
    fill(0);
    text(usertext,250,150);
    text(ageInput,250,200);
    
}
function updatetext() {
    usertext = this.value();
    ageInput = this.value();
}