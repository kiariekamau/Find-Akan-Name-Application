var date = function(CC,YY,MM,DD) {
    return  ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
 }
  var CC=parseInt(prompt("Enter the century you were born,if its 2000 input 20:"));
  var YY = parseInt(prompt("Enter the year you were born,if its 1989 input 89:"));
  var MM=parseInt( prompt("Enter the month you were born:"));
  var DD= parseInt(prompt("Enter the day you were born:"));
  var results=date(CC,YY,MM,DD).toFixed()
var gender= parseInt(prompt("Enter your gender:"));
if (date=0) {
    console.log(alert="sunday");
  } else if (date=1) {
    console.log(alert ="monday");
  } else if (date=2) {
    console.log(alert="tuesday");
  } else if (date=3){
    console.log(alert="wednesday");
  } else if (date=4){ 
    console.log(alert="thursday"); 
  } else if (date=5) { 
    console.log(alert="friday");
  } else {          
    console.log(alert="saturday");
  }