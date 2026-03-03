// Function to handle Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;

        let isValid = true;

        if (name.length < 3) {
            document.getElementById('nameError').innerText = "Minimum 3 characters required";
            isValid = false;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('emailError').innerText = "Invalid email format";
            isValid = false;
        }
        if (password.length < 6) {
            document.getElementById('passwordError').innerText = "Minimum 6 characters required";
            isValid = false;
        }
        if (password !== confirm) {
            document.getElementById('confirmError').innerText = "Passwords do not match";
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            alert("Signup Successful!");
            window.location.href = 'login.html';
        }
    });
}

// Function to handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login Successful! Welcome, " + storedUser.name);
        } else {
            document.getElementById('loginPasswordError').innerText = "Invalid credentials";
        }
    });
}