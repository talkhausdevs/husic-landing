
// DEBUG AUTH.JS — Subscription check bypass enabled

// Simulate a logged-in user
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("✅ User is logged in:", user.email);

    // Bypass actual subscription check for dev/testing
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("subscribed", "true");

    // Update nav or UI
    const loginBtn = document.getElementById("login-btn");
    const dashboardBtn = document.getElementById("dashboard-btn");
    if (loginBtn) loginBtn.innerText = "Logout";
    if (dashboardBtn) dashboardBtn.style.display = "inline-block";
  } else {
    console.log("⛔ No user logged in");
    window.location.href = "login.html";
  }
});
