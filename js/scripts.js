var CC, YY, MM, DD, d, dayValue;
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate() {
  var gender = document.getElementsByTagNameNS("gender");
  if(document.myform.year.value == "" ) {
      alert ("Input the year");
      document.myForm.year.focus();
      return false;
  }  
  else if(document.myForm.month.value == "") {
      alert ("Input the month");
      document.myForm.month.focus();
      return false;
  }
  else if(document.myForm.date.value == "") {
      alert ("Input the date")
      document.myForm.date.focus();
      return false;
  }
  else if(sex[0].checked==false && sex[1].checked==false) {
      alert ("You must provide your gender");
      return false;
  }
  else{
      return true;
  }

}

function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById ("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    console.log(d);
    return (math.floor(d));
}