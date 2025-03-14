// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNYwEEqMBWuUQnaUB1NXwatzI8Yzi2Lyk",
  authDomain: "netflixgpt-3c476.firebaseapp.com",
  projectId: "netflixgpt-3c476",
  storageBucket: "netflixgpt-3c476.firebasestorage.app",
  messagingSenderId: "194644400782",
  appId: "1:194644400782:web:06cd0f9820c4c447ec07df",
  measurementId: "G-5SFNNJMKK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();