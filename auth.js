
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgFzQHL_q02mGF083TkLREpFyU0dE3Hcs",
  authDomain: "husic-6705e.firebaseapp.com",
  projectId: "husic-6705e",
  storageBucket: "husic-6705e.appspot.com",
  messagingSenderId: "311183107893",
  appId: "1:311183107893:web:c62720409ce8669b64ce7c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const authLink = document.getElementById("authLink");
  const browseLinks = document.querySelectorAll("a[href='browse.html']");

  onAuthStateChanged(auth, (user) => {
    if (authLink) {
      if (user) {
        authLink.textContent = "Log Out";
        authLink.href = "#";
        authLink.addEventListener("click", async (e) => {
          e.preventDefault();
          await signOut(auth);
          alert("Logged out.");
          window.location.href = "index.html";
        });
      } else {
        authLink.textContent = "Log In";
        authLink.href = "login.html";
      }
    }

    // Browse button redirect logic
    if (browseLinks.length > 0) {
      browseLinks.forEach(link => {
        link.addEventListener("click", (e) => {
          if (!user) {
            e.preventDefault();
            alert("Please log in to continue.");
            window.location.href = "login.html";
          } else {
            const subscribed = localStorage.getItem("subscribed") === "true"; // mock for now
            if (!subscribed) {
              e.preventDefault();
              alert("You need an active plan to browse music.");
              window.location.href = "pricing.html";
            }
          }
        });
      });
    }
  });
});
