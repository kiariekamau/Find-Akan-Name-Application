function akanName () {
  var db = parseInt(document.getElementById("birthDate").value);
  var mb = parseInt(document.getElementById("birthMonth").value);
  var yb = parseInt(document.getElementById("birthYear").value);
    
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var gender = document.getElementsByName("gender");
  if(gender.checked === true) {
    gender = "Male";
  }
  else {
    gender = "Female";
  }

  var day = new Date(yb + "/" + mb + "/" + db);
  var result = day.getDay();

  if (db<=0 || db>31 || ( mb===2 && db>29)) {
     alert ("invalid date please enter a valid date.")
  }
  else if( mb>12 || mb<1) {
     alert ("invalid month please enter a valid month.")
  }
  else if (yb.toString().length>4 || yb.toString().length<4 ) {
     alert ("invalid year please enter a valid year.")
  }
  else if (gender==="Male") {
    alert ("You were born on" + daysOfWeek[result]+ " .Your Akan Name is " + maleNames[result]);
  }
  else if (gender==="Female") {
    alert ("You were born on" + daysOfWeek[result]+ " .Your Akan Name is " + femaleNames[result]);
  }
  else {
    alert("Please re-fill the fields again");
  }
}

