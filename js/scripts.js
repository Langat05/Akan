var CC, YY, MM, DD, d, dayValue;
var daysNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate() {
    var genders = document.getElementsByName("gender");
    if (document.myform.year.value == "") {
        alert("Input the year");
        document.myForm.year.focus();
        return false;
    } else if (document.myForm.month.value == "" || isNaN( document.myForm.month.value ) ) {
        alert("Input the month");
        document.myForm.month.focus();
        return false;
    } else if (document.myForm.date.value == "" || isNaN( document.myForm.month.value )) {
        alert("Input the date")
        document.myForm.date.focus();
        return false;
    } else if (person[0].checked == false && person[1].checked == false) {
        alert("You must provide your gender");
        return false;
    } else {
        return true;
    }

}

function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (math.floor(d));
}

function getGender() {
    var genders = document.getElementsByName("gender");
    if (gender[0].checked == true) {
        var gender = "male";
    } else if (gender[1].checked == true) {
        var gender = "female";
    } else {
        return false;
    }

    switch (gender) {
        case "male":
            if (dayValue == 1) {
                alert(" Your Akan name is " + maleNames[0] + " and you were born on " + days[0]);
            } else if (dayValue == 2) {
                alert(" Your Akan name is " + maleNames[1] + " and you were born on " + days[1]);
            } else if (dayValue == 3) {
                alert(" Your Akan name is " + maleNames[2] + " and you were born on " + days[2]);
            } else if (dayValue == 4) {
                alert(" Your Akan name is " + maleNames[3] + " and you were born on " + days[3]);
            } else if (dayValue == 5) {
                alert(" Your Akan name is " + maleNames[4] + " and you were born on " + days[4]);
            } else if (dayValue == 6) {
                alert(" Your Akan name is " + maleNames[5] + " and you were born on " + days[5]);
            } else if (dayValue == 7) {
                alert(" Your Akan name is " + maleNames[6] + " and you were born on " + days[6]);
            }
            break;
        case "female":
            if (dayValue == 1) {
                alert(" Your Akan name is " + femaleNames[0] + " and you were born on " + days[0]);
            } else if (dayValue == 2) {
                alert(" Your Akan name is " + femaleNames[1] + " and you were born on " + days[1]);
            } else if (dayValue == 3) {
                alert(" Your Akan name is " + femaleNames[2] + " and you were born on " + days[2]);
            } else if (dayValue == 4) {
                alert(" Your Akan name is " + femaleNames[3] + " and you were born on " + days[3]);
            } else if (dayValue == 5) {
                alert(" Your Akan name is " + femaleNames[4] + " and you were born on " + days[4]);
            } else if (dayValue == 6) {
                alert(" Your Akan name is " + femaleNames[5] + " and you were born on " + days[5]);
            } else if (dayValue == 7) {
                alert(" Your Akan name is " + femaleNames[6] + " and you were born on " + days[6]);
            }
            break;
    }
}
function findName(){
    dayValue = calculateDayValue();
    getGender();
}