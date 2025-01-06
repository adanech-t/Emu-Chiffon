// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_uc0HinTHazZdQYPeO6c-I7uF-hVrrew",
  authDomain: "emu-chiffon.firebaseapp.com",
  projectId: "emu-chiffon",
  storageBucket: "emu-chiffon.firebasestorage.app",
  messagingSenderId: "783617496342",
  appId: "1:783617496342:web:d9715aa6562db23dd8ec37",
  measurementId: "G-2P5L9DVN6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

