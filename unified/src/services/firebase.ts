// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR7tmOVhNaWcOrKCClvH0-lj6dWPgaxI0",
  authDomain: "unified-2aa4e.firebaseapp.com",
  projectId: "unified-2aa4e",
  storageBucket: "unified-2aa4e.appspot.com",
  messagingSenderId: "379161546214",
  appId: "1:379161546214:web:25781311d9b4e36a2bda27",
  measurementId: "G-Q84R6VFY3Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
