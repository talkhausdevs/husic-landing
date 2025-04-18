import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgFzQHL_q02mGF083TkLREpFyU0dE3Hcs",
  authDomain: "husic-6705e.firebaseapp.com",
  projectId: "husic-6705e",
  storageBucket: "husic-6705e.appspot.com", // fixed!
  messagingSenderId: "311183107893",
  appId: "1:311183107893:web:c62720409ce8669b64ce7c"
};

const app = initializeApp(firebaseConfig);

// Exporting for future use
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
