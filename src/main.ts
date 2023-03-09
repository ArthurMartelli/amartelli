import "./app.scss";
import App from "./App.svelte";
import Navbar from "./lib/Navbar.svelte";
import Footer from "./lib/Footer.svelte";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getPerformance } from "firebase/performance";

// const firebase_config = {
//   apiKey: "AIzaSyAadLLAjggUrRnFEWGTvGY6NQLiDKBmLkM",
//   authDomain: "arthur-martelli.firebaseapp.com",
//   projectId: "arthur-martelli",
//   storageBucket: "arthur-martelli.appspot.com",
//   messagingSenderId: "502266186943",
//   appId: "1:502266186943:web:e53a140b88f27615948a0a",
//   measurementId: "G-1KBXX5QP3M",
// };

// // Initialize Firebase
// const firebase_app = initializeApp(firebase_config);
// const perf = getPerformance(firebase_app);
// const analytics = getAnalytics(firebase_app);

const app = new App({
  target: document.getElementById("app"),
});

const navbar = new Navbar({
  target: document.getElementById("navbar"),
});

const footer = new Footer({
  target: document.getElementById("footer"),
});

export default app;
