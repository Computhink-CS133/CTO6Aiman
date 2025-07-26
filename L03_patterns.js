function setup() {
  var i=0;
  var num=6;
  createCanvas(600, 400);
  background(1000);
  noLoop(); // Stops continuous drawing
  }
  
function draw() {
  
  for (i<num ;i++;)
  {
  circle(50+(i*100),200,100);
  fill(Math.random()*200,Math.random()*255,Math.random()*255);
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}