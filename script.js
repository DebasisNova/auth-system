
var signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.onsubmit = function(e){

e.preventDefault();

var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value;
var confirm = document.getElementById("confirmPassword").value;

document.getElementById("nameError").innerText="";
document.getElementById("emailError").innerText="";
document.getElementById("passError").innerText="";
document.getElementById("confirmError").innerText="";

if(name.length < 3){
document.getElementById("nameError").innerText="Name must be at least 3 characters";
return;
}

if(email.indexOf("@") == -1){
document.getElementById("emailError").innerText="Invalid email";
return;
}

if(password.length < 6){
document.getElementById("passError").innerText="Password must be at least 6 characters";
return;
}

if(password != confirm){
document.getElementById("confirmError").innerText="Passwords do not match";
return;
}

var user = {
name:name,
email:email,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup successful");

window.location="login.html";

}

}




var loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.onsubmit = function(e){

e.preventDefault();

var email = document.getElementById("loginEmail").value;
var password = document.getElementById("loginPassword").value;

var storedUser = localStorage.getItem("user");

if(storedUser == null){
alert("No account found. Please signup first.");
return;
}

var user = JSON.parse(storedUser);

if(email == user.email && password == user.password){

alert("Login successful! Welcome "+user.name);

}
else{

document.getElementById("loginPassError").innerText="Invalid email or password";

}

}

}
