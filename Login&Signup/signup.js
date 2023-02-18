document.querySelector("form").addEventListener("submit", addUser);

var arr = JSON.parse(localStorage.getItem("SignUpNew")) || [];

function addUser() {
  event.preventDefault();
  var full_name = document.querySelector("#signup_name").value;
  var email_address = document.querySelector("#signup_Email").value;
  var user_password = document.querySelector("#signup_password").value;
  if (
    full_name.length != 0 &&
    email_address.length != 0 &&
    user_password != 0
  ) {
    var UserObj = {
      full_name: full_name,
      email_address: email_address,
      user_password: user_password,
    };
    var email_already = false;
    arr.forEach((element) => {
      if (element.email_address == email_address) {
        email_already = true;
      }
      if (email_already) {
        return false;
      }
    });
    if (email_already == true) {
      alert("Email already present in the database");
    } else {
      arr.push(UserObj);
      localStorage.setItem("SignUpNew", JSON.stringify(arr));
      alert("signup successful");
      location.href = "../index.html";
    }
  } else {
    alert("Fill Details Correctly");
  }
}