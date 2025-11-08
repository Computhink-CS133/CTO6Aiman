// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let 
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