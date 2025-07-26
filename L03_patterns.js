var spacehahah=120
var num=20

function setup() {

  createCanvas((spacehahah*num)*2, spacehahah*num);
  background(0);
  // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  
  
  for (var i=0;i<num ;i++)
  {
  var colorvalue=255;
  stroke(1000,1000,1000,1000);
  circle(spacehahah+(i*100)+spacehahah,200,100);
  colorvalue-=.00000001;
  fill(colorvalue);
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}