var spacehahah=120
var num=8

function setup() {

  createCanvas((spacehahah*num)*2, spacehahah*num);
  background(100);
  // noLoop(); // Stops continuous drawing
  }
  
  var y=200
  var colorvalue=255;
  for (var l=0;l<num ;l++)
  {
function draw() 
  {
    for (var i=0;i<num ;i++)
  {
  var result=(i%2)
  stroke(1000,1000,1000,1000);
  rect(spacehahah+(i*100)+spacehahah,y,100,100);

  if (result===1)
  {
    colorvalue=255;
  }
  else
  {
    colorvalue=0
  }
  fill(colorvalue)
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}
var y=y-100
  }
