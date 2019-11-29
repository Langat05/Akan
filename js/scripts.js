var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var cc = parseInt(document.getElementById("CC"));
var dd = parseInt(document.getElementById("DD"));
var mm = parseInt(document.getElementById("MM"));
var male = parseInt(document.getElementById("male"));
var yy = parseInt(document.getElementById("YY"));
var female = parseInt(document.getElementById("female"));

function day() {
    var cc = parseInt(document.getElementById("CC"));
    var dd = parseInt(document.getElementById("DD"));
    var mm = parseInt(document.getElementById("MM"));
    var male = parseInt(document.getElementById("male"));
    var yy = parseInt(document.getElementById("YY"));
    var female = parseInt(document.getElementById("female"));
    var d = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    doucument.getElementById("ans") = d;

}
doucument.getElementById("ans") = day();