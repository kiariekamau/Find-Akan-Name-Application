var date = function() {
  var CC=parseInt(prompt("Enter the century you were born,if its 2000 input 20:"));
  var YY = parseInt(prompt("Enter the year you were born,if its 1989 input 89:"));
  var MM=parseInt( prompt("Enter the month you were born:"));
    if (MM<=0 || MM>12) {
    return alert("invalid month please enter a valid month")
 }
  var DD= parseInt(prompt("Enter the day you were born:"));
    if (DD<=0 || DD>31) {
    return alert ("invalid date please enter a valid date")
 }
    return  ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7
 } 
 
  var results=date().toFixed()
  var gender= parseInt(prompt("Enter your gender:"));
    if (results<=0) {
    alert("sunday");
  } else if (results==1) {
    alert("monday");
  } else if (results==2) {
    alert("tuesday");
  } else if (results==3){
    alert("wednesday");
  } else if (results==4){ 
    alert("thursday"); 
  } else if (results==5) { 
    alert("friday");
  } else {          
    alert("saturday");
  }
  if (results<=0 && gender=="male") {
    alert("Kwasi");
  } else if (results==1 && gender==="male") {
    alert("Kwadwo");
  } else if (results==2 && gender==="male") {
    alert("Kwabena");
  } else if (results==3 && gender==="male"){
    alert("Kwaku");
  } else if (results==4 && gender==="male"){ 
    alert("Yaw"); 
  } else if (results==5 && gender==="male") { 
    alert("Kofi");
  } else if (results==6 && gender==="male"){          
    alert("Kwame");
  } else if (results<=0 && gender==="female") {
    alert("Akosua");
  } else if (results==1 && gender==="female") {
    alert("Adwoa");
  } else if (results==2 && gender==="female") {
    alert("Abenaa");
  } else if (results==3 && gender==="female"){
    alert("Akua");
  } else if (results==4 && gender==="female"){ 
    alert("YAA"); 
  } else if (results==5 && gender==="female") { 
    alert("Afua");
  } else  {          
    alert("Ama");
  }