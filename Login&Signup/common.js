console.log("Hello world! I'm Login & Sign Up");

// const navbar = require('navbar');
// import navbar from '../Navbar/navbar.js';

// document.body.innerHTML = navbar()
// document.getElementById("navbar").innerHTML = navbar();





var arr = JSON.parse(localStorage.getItem("SignUp")) || [];

function signUp(e){
    event.preventDefault();
    var signup_data = {
        name: document.getElementById("signup_name").value,
        email: document.getElementById("signup_Email").value,
        password: document.getElementById("signup_password").value
    }
        arr.push(signup_data);
        localStorage.setItem("SignUp", JSON.stringify(arr));
        window.location.href="../index.html";
}

function login(e){
    event.preventDefault();
    var email = document.getElementById("login_Email").value;
    var password = document.getElementById("login_password").value;

    var flag = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i].email === email && arr[i].password === password){
            flag = true;
            break;
        }
    }
    if(flag){
        alert("login successfully");
        window.location.href="./Login&Signup/quiz.html";
    }
    else{
        alert("Enter correct Email And Password");
    }
}