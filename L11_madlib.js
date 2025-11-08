let noun;
let adj;
let verb;
let place;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
  
    noun = createInput("🗿");
    noun.position(200,40);    
    adj = createInput("🗿");
    adj.position(200,60);    
    verb = createInput("🗿");
    verb.position(200,80);    
    place = createInput("🗿");
    place.position(200,100);
    submitButton = createButton("Show");
    submitButton.position(place.x+200,place.y)
    submitButton.mousePressed(displayInput);
}
function draw() {



}
function displayInput() {
    // console.log(noun.value());
    // console.log(adj.value());
    // console.log(verb.value());
    // console.log(place.value());


}


