window.onload = function () {
  // Get the login form element and the submit button element
  // and save them to variables
  var submitButton = document.querySelector("input[type=submit]");
  var loginFormElement = document.getElementById("loginbox");
  // When the submit button is clicked...
  submitButton.addEventListener('click', function(event) {
    // ...call the checkFields function
    checkFields();
  });
  // When the submit event is detected on the login form...
  loginFormElement.addEventListener('submit', function(event) {
    // ...prevent its default operation of sending the form
    // to a server since this is not necessary for the project
    event.preventDefault();
  });
  // The checkFields function will check both the username and password fields
  function checkFields() {
    // Get the username field element and the password element on the form
    var userNameElement = document.getElementById("login_name");
    var userPasswordElement = document.getElementById("user_password");
    // If the username field is empty...
    if (validator.isEmpty(userNameElement.value)) {
      // ..display a custom message to that asks for a username
      userNameElement.setCustomValidity("Please provide your username to" +
        " login.");
      // ...else if the username input is not alphanumeric...
    } else if (!validator.isAlphanumeric(userNameElement.value)){
      // ...display a custom message that notifies the user to use only
      // alphanueric input...
      userNameElement.setCustomValidity("You must be mistaken, usernames " +
        " only have alphanumeric characters.");
      // ...else if the username field has input of more than 13 characters...
    } else if (!validator.isLength(userNameElement.value, 13)) {
      // ...display a custom message to notify user of only less than 13 characters
      // for input...
      userNameElement.setCustomValidity("Usernames are only up to 13 " +
        "characters long.");
      // ...else if the username input is less than 4 characters...
    } else if (!validator.isOfLength(userNameElement.value, 4)) {
      // ...display a custom message to input 4 characters or more
      userNameElement.setCustomValidity("Usernames are at least 4 characters "+
        "long.");
      // ...else reset the validity state of the userNameElement
    } else {
      userNameElement.setCustomValidity("");
    }
    // If the password field is empty...
    if (validator.isEmpty(userPasswordElement.value)) {
      // ...display a custom message that asks for a password input form user
      userPasswordElement.setCustomValidity("Please provide your password " +
        "to login.");
      // ...else if the password length is less than 8 characters...
    } else if (!validator.isOfLength(userPasswordElement.value, 8)) {
      // ...display a custom message to enter a password of at least 8
      // characters...
      userPasswordElement.setCustomValidity("All passwords for this site are"+
        " at least 8 characters long.");
      // ...else if the input is alphanumeric...
    } else if (validator.isAlphanumeric(userPasswordElement.value)) {
      // ...display a custom message requesting non alphanumeric characters
      // for the password
      userPasswordElement.setCustomValidity("All passwords for this site " +
        " require symbols in them i.e. '$', '&', '%' etc.");
      // else reset the validity state of the userPasswordElement
    } else {
      userPasswordElement.setCustomValidity("");
    }
  }
};
