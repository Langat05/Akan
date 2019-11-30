var CC, YY, MM, DD, d, dayValue;
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate() {
  var gender = document.getElementsByTagNameNS("gender");
  if(document.myform.year.value == "" || document.year.value.length !=4) {
      alert ("Invalid year");
      document.myForm.year.focus();
      return false;
  }  
  else if(document.myForm.month.value == "" || document.myForm.month.value <=0 || document.myForm.month >12) {
      alert ("Invalid date");
      return false;
  }
}