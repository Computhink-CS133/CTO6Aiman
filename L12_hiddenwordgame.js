// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let input,sumbit;
let words=["Monkey",
    "Table",
    "Wood",
    "Skull",
    ""
]
function setup() {
    createCanvas(600,400);
    background(220);
  
    input = createInput("Disabled monkey");
    input.position(100,200);
    input.size(150,30);
    input.style("font-size","20px")
    sumbit = createButton("Display");
    sumbit.size(150,30);
    sumbit.style("font-size","20px")
    sumbit.position(300,200);
    sumbit.mousePressed(displayInput);
}
function displayInput(){
    background(220);
    textSize(25);
    textAlign(CENTER,CENTER);
    text(input.value(),100,300);
    console.log(input.value());
}