import "./app.css";
import App from "./App.svelte";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAadLLAjggUrRnFEWGTvGY6NQLiDKBmLkM",
  authDomain: "arthur-martelli.firebaseapp.com",
  projectId: "arthur-martelli",
  storageBucket: "arthur-martelli.appspot.com",
  messagingSenderId: "502266186943",
  appId: "1:502266186943:web:e53a140b88f27615948a0a",
  measurementId: "G-1KBXX5QP3M",
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
