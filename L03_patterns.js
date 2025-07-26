var spacehahah=120
var num=5

function setup() {

  createCanvas((spacehahah*num)*2, spacehahah*num);
  background(255);
  // noLoop(); // Stops continuous drawing
  }
  
function draw() 
  {
  var colorvalue=0;
    for (var i=0;i<num ;i++)
  {
  
  stroke(1000,1000,1000,1000);
  circle(spacehahah+(i*100)+spacehahah,200,100);
  colorvalue+=5;
  fill(colorvalue);
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}