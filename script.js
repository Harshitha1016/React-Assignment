// Registration Function

function register(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    if(username == "" || password == ""){

        document.getElementById("message").innerHTML =
        "Please fill all fields";

        return;
    }

    if(password.length < 4){

        document.getElementById("message").innerHTML =
        "Password must be minimum 4 characters";

        return;
    }

    if(password != confirmPassword){

        document.getElementById("message").innerHTML =
        "Passwords do not match";

        return;
    }

    localStorage.setItem("username", username);

    localStorage.setItem("password", password);

    alert("Registration Successful");

    window.location.href = "login.html";
}



// Login Function

function login(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let storedUser =
        localStorage.getItem("username");

    let storedPass =
        localStorage.getItem("password");

    if(username == storedUser &&
       password == storedPass){

        localStorage.setItem("loginStatus", "true");

        window.location.href = "home.html";
    }

    else{

        document.getElementById("message").innerHTML =
        "Invalid Username or Password";
    }
}



// Logout Function

function logout(){

    localStorage.removeItem("loginStatus");

    window.location.href = "login.html";
}