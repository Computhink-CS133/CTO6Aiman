var spacehahah=120
var num=20

function setup() {

  createCanvas((spacehahah*num)*2, spacehahah*num);
  background(100);
  // noLoop(); // Stops continuous drawing
  }
  
var colorvalue=255;
  function draw() 
  {
    for (var i=0;i<num ;i++)
  {
  var result=(i%2)
  stroke(1000,1000,1000,1000);
  circle(spacehahah+(i*100)+spacehahah,200,100);

  if (result=0)
  {
    colourvalue=255;
  }
  else{
    colorvalue=0
  }
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}
