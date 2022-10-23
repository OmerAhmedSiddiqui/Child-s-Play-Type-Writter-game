// import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { auth } from "./lib.js";
// // import { darkTheme,theme } from "./app.js";


// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         const uid = user.uid;
//         console.log("user is Signed In")
//         // ...
//     } else {
//         // User is signed out
//         console.log("user is Signed Out")

//         // ...
//     }
// });

// let signUp = document.querySelector("#signUp")
// signUp.addEventListener("click", signUpFunc);
// async function signUpFunc() {
//     console.log("signUp")
//     let email = document.querySelector("#email")
//     let password = document.querySelector("#password")
//     await createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("sigin ==>", user)
//             location = "game.html"
//             sendEmailVerification(auth.currentUser)
//                 .then(() => {
//                     // Email verification sent!
//                     console.log("Email Verification Sent")

//                     // ...
//                 });
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error("error ==>", errorMessage)

//             // ..
//         });


// }

let secondForm = document.querySelector("#secondForm")
let firstForm = document.querySelector("#firstForm")
firstForm.style.visibility = "visible"

// secondForm.style.visibility = "hidden"

function showSignUp() {
    secondForm.style.visibility = "hidden"
    firstForm.style.visibility = "visible"
    // firstForm.classList.add = "firstFormpp"

}

let bodypick = document.querySelector("#bodypick");
let logo = document.querySelector("#logo");

let navbar = document.querySelector("#navbar");

$('[type="checkbox"]').click(function(e) {
   var isChecked = $(this).is(":checked");
   if(isChecked === true ){
      bodypick.style.backgroundColor = "black"
      logo.src = "imges/R-removebg-preview (1).png" 
      navbar.classList.add("navbar-dark")
      bodypick.classList.add("text-white")

   }
   if(isChecked === false ){
      bodypick.style.backgroundColor = "#99edc3"
      logo.src = "imges/download__1_-removebg-preview.png" 
      navbar.classList.remove("navbar-dark")
      bodypick.classList.remove("text-white")

   }
   
 });
// let signIn = document.querySelector("#SignIn")
// signIn.addEventListener("click", signInFunc);
// async function signInFunc() {
//     console.log("signIn")
//     let emailSigIn = document.querySelector("#emailSigIn")
//     let passwordSignIn = document.querySelector("#passwordSignIn")

//     await signInWithEmailAndPassword(auth, emailSigIn.value, passwordSignIn.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("sigin ==>", user)
//             location = "game.html"
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error("error ==>", errorMessage)

//         });


// }



// import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { auth } from "./lib.js";



















