var date = function(CC,YY,MM,DD) {
    return  ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
 }
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