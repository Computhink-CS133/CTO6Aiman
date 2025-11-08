// write your codes here
//no🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
let input,sumbit,hiddentext,displayText;
let words=["Monkey",
    "Table",
    "Wood",
    "Skull",
    "Chair",
    "Bowl"
]
let randomword;
function setup() {
    createCanvas(600,400);
    background(220);


    randomword = random(words);
    console.log(randomword)
    textSize(25);
    textAlign(CENTER,CENTER);
    displayText = randomword(0).Uppercase+" "+"_".repeat(randomword.length-1);
    text("Hint:"+ displayText,100,350);

    input = createInput("");
    input.position(100,200);
    input.size(150,30);
    input.style("font-size","20px")
    sumbit = createButton("Guess");
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
    text("Hint:"+ displayText,100,350);
}