let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

// Assinment 1
if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour>=20 && hour <=22){
  textHolder.innerHTML = "Snacktime";
} else if (hour>=22 && hour <=24){
  textHolder.innerHTML = "Goodnight";
}

// Assinment 2
if (hour >=6 && hour <=8) { 
    textHolder.innerHTML = "Good morning!";
  } else if (hour >=10 && hour <=12 ) { 
    textHolder.innerHTML = "It is lunch time";
} else if (hour >=8 && hour <=14 ) { 
    textHolder.innerHTML = "School";
} else if (hour >=16 && hour <=21 ) { 
    textHolder.innerHTML = "Work time";
  } else if (hour == 15) { 
    textHolder.innerHTML = "Food time";
  } else if (hour >= 21 && hour <= 23) { 
    textHolder.innerHTML = "Afternoon time";
  } else if (hour >=23 && hour <=00 ) { 
    textHolder.innerHTML = "Goodnight";
  }

  // Assigment 3



  // Assignment 4