// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-rZg6_IfOlRST3pvsntJVTmdZmIhk4iM",
  authDomain: "kamil-suchocki.firebaseapp.com",
  projectId: "kamil-suchocki",
  storageBucket: "kamil-suchocki.appspot.com",
  messagingSenderId: "8662936867",
  appId: "1:8662936867:web:1dc7254f95fb6a5d653096",
  measurementId: "G-6X9SE8VXKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);