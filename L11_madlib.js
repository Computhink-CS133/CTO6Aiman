let noun;
let adj;
let verb;
let place;
let submitButton;
let stowytempwates;
let stowytext="";
let template; 
function setup() {
    createCanvas(600,400);
    background(220);
  
    noun = createInput("monkey ");
    noun.position(200,40);    
    adj = createInput("disabled");
    adj.position(200,60);    
    verb = createInput("pp");
    verb.position(200,80);    
    place = createInput("the toilet");
    place.position(200,100);
    submitButton = createButton("Show");
    submitButton.position(place.x+200,place.y)
    submitButton.mousePressed(displayInput);

}
function draw() {
    


    stowytempwates=["The {adj} {noun} decided to {verb} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} near {place}."];
    template = random(stowytempwates);


    }

function displayInput() {
    // console.log(noun.value());
    // console.log(adj.value());
    // console.log(verb.value());
    // console.log(place.value());
    stowytext = template.replace("{noun}",noun.value())
                        .replace("{verb}",verb.value())
                        .replace("{adj}",adj.value())
                        .replace("{place}",place.value());

console.log(stowytext);

}


