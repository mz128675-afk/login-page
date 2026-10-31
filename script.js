// Fixed login credentials (demo only, no backend).
let correctUsername = "admin";
let correctPassword = "12345";

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

loginBtn.addEventListener("click", function () {
  let username = usernameInput.value;
  let password = passwordInput.value;

  // Strict comparison (===) checks both value and type.
  if (username === correctUsername && password === correctPassword) {
    message.textContent = "Login successful! Welcome, admin.";
    message.style.color = "green";
    alert("Login successful!");
  } else {
    message.textContent = "Login failed! Wrong username or password.";
    message.style.color = "red";
    alert("Login failed!");
  }
});
