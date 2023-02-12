function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }
  var l = document.forms["myForm"]["lname"].value;
  if (l == "") {
    alert("Last name must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["ename"].value;
  if (e == "") {
    alert("Email Address must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["pword"].value;
  if (e == "") {
    alert("Password must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["bday"].value;
  if (e == "") {
    alert("Birthdate must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["address"].value;
  if (e == "") {
    alert("Address must be filled out");
    return false;
  }
  var no = document.forms["myForm"]["mobileNo"].value;
  if (no == "") {
    alert("Mobile number must be filled out");
    return false;
  }
}
