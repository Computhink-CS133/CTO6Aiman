// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let input,sumbit
function setup() {
        createCanvas(600,400);
    background(220);
  
    input = createInput("Disabled monkey")
    input.position()
    submitButton = createButton("Show");
    submitButton.position(place.x+200,place.y)
    submitButton.mousePressed(displayInput);
}