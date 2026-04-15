var signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.onsubmit = function (e) {
        e.preventDefault();

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var pass = document.getElementById("password").value;
        var conf = document.getElementById("confirmPassword").value;

    
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passError").innerHTML = "";
        document.getElementById("confirmError").innerHTML = "";


        if (name.length < 3) {
            document.getElementById("nameError").innerText = "Name must be at least 3 characters";
            return false;
        }
        if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            document.getElementById("emailError").innerText = "Please enter a valid email address";
            return false;
        }

        if (pass.length < 6) {
            document.getElementById("passError").innerText = "Password is too short!";
            return false;
        }

        if (pass !== conf) {
            document.getElementById("confirmError").innerText = "Passwords don't match";
            return false;
        }

      
        var userData = {
            name: name,
            email: email,
            password: pass
        };

       
        localStorage.setItem("user", JSON.stringify(userData));
        
        alert("Account created successfully!");
        window.location.href = "login.html";
    }
}


var loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.onsubmit = function (event) {
        event.preventDefault();

        var logEmail = document.getElementById("loginEmail").value;
        var logPass = document.getElementById("loginPassword").value;

        var data = localStorage.getItem("user");

        if (data == null) {
            alert("User not found! Please register.");
        } else {
            var parsedUser = JSON.parse(data);

           
            if (logEmail === parsedUser.email && logPass === parsedUser.password) {
               
                localStorage.setItem("isLoggedIn", "true");
                alert("Login successful!");
                window.location.href = "home.html";
            } else {
       
                document.getElementById("loginPassError").innerText = "Wrong email or password!";
            }
        }
    }
}


var welcomeText = document.getElementById("welcomeMsg");
var btnLogout = document.getElementById("logoutBtn");

if (welcomeText || btnLogout) {

    var authStatus = localStorage.getItem("isLoggedIn");
    
    if (authStatus !== "true") {
        window.location.href = "login.html";
    } else {

        var savedData = localStorage.getItem("user");
        if (savedData) {
            var currentUser = JSON.parse(savedData);
            if (welcomeText) {
                welcomeText.innerText = "Welcome back, " + currentUser.name;
            }
        }
    }


    if (btnLogout) {
        btnLogout.onclick = function () {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
        };
    }
}