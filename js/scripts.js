var date = function(CC,YY,MM,DD) {
    return  ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
 }
  var CC=parseInt(prompt("Enter the century you were born,if its 2000 input 20:"));
  var YY = parseInt(prompt("Enter the year you were born,if its 1989 input 89:"));
  var MM=parseInt( prompt("Enter the month you were born:"));
  var DD= parseInt(prompt("Enter the day you were born:"));
  var results=date(CC,YY,MM,DD).toFixed()
  var gender= parseInt(prompt("Enter your gender:"));
  if (results=0) {
    alert("sunday");
  } else if (results=-1) {
    alert("monday");
  } else if (results=-2) {
    alert("tuesday");
  } else if (results=-3){
    alert("wednesday");
  } else if (results=-4){ 
    alert("thursday"); 
  } else if (results=-5) { 
    alert("friday");
  } else {          
    alert("saturday");
  }