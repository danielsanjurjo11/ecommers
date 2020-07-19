
function validateForm() {
    var x = document.forms["work"]["name"].value;
    var y = document.forms["work"]["email"].value;
    if (x == "" && y == "") {
      alert("Name and email must be filled out");
      return false;
    } else if (x == ""){
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Email must be filled out")
        return false;
    } else {
        return true
    }
  }
window.onload = noalert.validateForm(true);
  validateForm();