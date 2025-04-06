// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe0RBI_cRq9VLEOkKsz6NsyQApSWY55oA",
  authDomain: "chat-app-5c74e.firebaseapp.com",
  projectId: "chat-app-5c74e",
  storageBucket: "chat-app-5c74e.firebasestorage.app",
  messagingSenderId: "717086187629",
  appId: "1:717086187629:web:c8aa0b03ae9e72d9bc1f64",
  measurementId: "G-PM9SJXNJWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);