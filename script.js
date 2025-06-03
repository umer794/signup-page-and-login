//  // Sign Up Logic
// document.addEventListener("DOMContentLoaded", () => {
//   const signupForm = document.getElementById("signupForm");
//   if (signupForm) {
//     signupForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const username = document.getElementById("signupUsername").value;
//       const password = document.getElementById("signupPassword").value;

//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);

//       alert("Signup successful! Please login.");
//       window.location.href = "login.html";
//     });
//   }

//   // Login Logic
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const enteredUsername = document.getElementById("loginUsername").value;
//       const enteredPassword = document.getElementById("loginPassword").value;

//       const storedUsername = localStorage.getItem("username");
//       const storedPassword = localStorage.getItem("password");

//       if (
//         enteredUsername === storedUsername &&
//         enteredPassword === storedPassword
//       ) {
//         localStorage.setItem("loggedInUser", storedUsername);
//         window.location.href = "welcome.html";
//       } else {
//         alert("Invalid username or password!");
//       }
//     });
//   }
// });


// Signup form handler
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert("Please fill out both fields.");
    }
  });
}

// Login form handler
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (usernameInput === storedUsername && passwordInput === storedPassword) {
      // Save login status in localStorage
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "welcome.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}

// Welcome page handler
if (document.getElementById("welcome-container")) {
  const username = localStorage.getItem("username");
  const welcomeText = `Welcome to my page, ${username}!`;
  document.getElementById("welcome-container").textContent = welcomeText;
}

