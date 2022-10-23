  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
  import { getAuth  } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCBES7vj0IbB1ImCMmBcOgqXD4JUYsZzX8",
    authDomain: "type-writer-game.firebaseapp.com",
    projectId: "type-writer-game",
    storageBucket: "type-writer-game.appspot.com",
    messagingSenderId: "573594439275",
    appId: "1:573594439275:web:dd0034ab27208bd49a2b2e",
    measurementId: "G-WDHHYKVDXX"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
export  const auth = getAuth(app);