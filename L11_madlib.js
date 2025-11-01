let noun;
let adj;
let verb;
let place;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
  
    noun = createInput();
    noun.position(200,40);    
    adj = createInput();
    adj.position(200,60);    
    verb = createInput();
    verb.position(200,80);    
    place = createInput();
    place.position(200,100);
    submitButton = createButton("Show");
    submitButton.position(place.x+200,place.y)
    submitButton.mousePressed(displayInput);
}
function draw() {



}
function displayInput() {
    noun = this.value();
    adj = this.value();
    verb = this.value();
    place = this.value();
    textSize(16);
    textAlign(CENTER,CENTER);
    fill(0);
    text(inputField,300,200);
    console.log(inputField);


}