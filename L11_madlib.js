let noun;
let adj;
let verb;
let adv;
let place;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
  
    noun = createInput();
    noun.position(200,height-80);    
    adj = createInput();
    adj.position(200,height-80);    
    verb = createInput();
    verb.position(200,height-80);    
    place = createInput();
    inputField.position(200,height-80);
    submitButton = createButton("Show");
    submitButton.position(inputField.x+200,inputField.y)
    submitButton.mousePressed(displayInput);
}
function draw() {



}
function displayInput() {
    inputField = this.value();
    textSize(16);
    textAlign(CENTER,CENTER);
    fill(0);
    text(inputField,300,200);
    console.log(inputField);


}