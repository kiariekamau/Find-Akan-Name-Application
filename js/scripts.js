var date = function(CC,YY,MM,DD) {
    return  ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
 }
  var CC=parseInt(prompt("Enter the century you were born,if its 2000 input 20:"));
  var YY = parseInt(prompt("Enter the year you were born,if its 1989 input 89:"));
  var MM=parseInt( prompt("Enter the month you were born:"));
  var DD= parseInt(prompt("Enter the day you were born:"));
   alert( date(CC,YY,MM,DD));
date.toExponential();
var gender= prompt("Enter your gender:");
if (d=0) {
    console.log("sunday");
  } else if (d=1) {
    console.log("monday");
  } else if (d=2) {
    console.log("tuesday");
  } else if (d=3){
    console.log("wednesday");
  } else if (d=4){ 
    console.log("thursday"); 
  } else if (d=5) { 
    console.log("friday");
  } else {          
    console.log("saturday");
  }