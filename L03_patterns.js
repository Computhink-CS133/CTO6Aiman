function setup() {
    createCanvas(600, 400);
    background(1000);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  circle(Math.random()*600,Math.random()*400,100);
  fill(Math.random()*255,Math.random()*255,Math.random()*255);
  circle(Math.random()*600,Math.random()*400,100);
  fill(Math.random()*255,Math.random()*255,Math.random()*255);
  circle(Math.random()*600,Math.random()*400,100);
  fill(Math.random()*255,Math.random()*255,Math.random()*255);
  circle(Math.random()*600,200,100);
  fill(Math.random()*255,Math.random()*255,Math.random()*255);


  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}