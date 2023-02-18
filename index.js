console.log("Hello world! I'm Quiz page");

document.querySelector("form").addEventListener("submit", checkUser);

var arr = JSON.parse(localStorage.getItem("SignUpNew")) || [];

function checkUser() {
  event.preventDefault();
  var email_address = document.querySelector("#login_Email").value;
  var user_password = document.querySelector("#login_password").value;

  if (email_address.length == 0 || user_password.length == 0) {
    alert("Please enter email and password");
  } else {
    var email_present = false;
    arr.forEach((element) => {
      if (element.email_address == email_address) {
        email_present = true;
        if (element.user_password == user_password) {
          alert("Login Successfull");
          window.location.href = "./Components/quiz.html";
        } else {
          alert("Password is incorrect");
          return false;
        }
      }
    });
  }
}