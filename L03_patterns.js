// var spacehahah=120
// var num=10

function setup() {

  createCanvas(600,1000);//(spacehahah*num)*2, spacehahah*num
  background(100);
  // noLoop(); // Stops continuous drawing
  }
  
// //   var y=200;
// //   var colorvalue=255;
// //   for (var l=0;l<num ;l++);
// //   {
function draw() 
  {
var circlediameter=30;
var rowcircle=5;
var totalwidth=circlediameter*rowcircle;


var startx= (width - totalwidth)/2+circlediameter/2;
var starty=(height - totalwidth)/2 + circlediameter/2;
for (var row=0;row<rowcircle ;row++)
{
for (var l=0;l<rowcircle ;l++){
  var x = startx + l * circlediameter;
  var y = starty+row *circlediameter
  fill(0,0,0);
  circle(x,y,circlediameter,circlediameter);



}

}
//     rect(width/2,height/2,height,width)
//     for (var i=0;i<num ;i++)
//   {
//   var result=(i%2);
//   stroke(1000,1000,1000,1000);
//   rect(spacehahah+(i*100)+spacehahah,y,100,100);

//   if (result===1)
//   {
//     colorvalue=255;
//   }
//   else
//   {
//     colorvalue=0;
//   }
//   fill(colorvalue);
//   }

//   // Task 1: Colour Gradient

//   // Task 2: Colour Loop

//   // Task 3: Row of Circles

//   // Task 4: Grid of Circles
// }

  }


