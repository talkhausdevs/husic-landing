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

  onAuthStateChanged(auth, (user) => {
    if (!authLink) return;

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
  });
});
