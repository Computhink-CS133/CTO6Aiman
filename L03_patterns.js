var spacehahah=120
var num=5

function setup() {

  createCanvas(spacehahah*num, 400);
  background(255);
  noLoop(); // Stops continuous drawing
  }
  
function draw() {
  
  
  for (var i=0;i<num ;i++)
  {
  stroke(1000,1000,1000,1000)
  circle(spacehahah+spacehahah+(i*100),200,100);
  fill(50*num-1 - (i*50));
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}