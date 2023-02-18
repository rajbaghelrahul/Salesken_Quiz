console.log("Hello world! I'm Navbar");

function navbar() {
  return `<ul>
  <a href="../index.html"><li>Quiz</li></a>
  <a href="../Components/Report.html"><li>Report</li></a>
  <a href="../Login&Signup/login.html"><li>Login</li></a>
  <a href="../Login&Signup/signUp.html"><li>SignUp</li></a>
</ul>`;
}

export default navbar;

// document.body.innerHTML = navbar()
