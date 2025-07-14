// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0d_LHFg9-AKHnnFUH43PDJWLEFtVX5FM",
  authDomain: "adventure-with-us.firebaseapp.com",
  projectId: "adventure-with-us",
  storageBucket: "adventure-with-us.firebasestorage.app",
  messagingSenderId: "785011943205",
  appId: "1:785011943205:web:12f553e3544aa08fa31ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);