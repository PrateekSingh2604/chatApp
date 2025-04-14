import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe0RBI_cRq9VLEOkKsz6NsyQApSWY55oA",
  authDomain: "chat-app-5c74e.firebaseapp.com",
  projectId: "chat-app-5c74e",
  storageBucket: "chat-app-5c74e.appspot.com",
  messagingSenderId: "717086187629",
  appId: "1:717086187629:web:c8aa0b03ae9e72d9bc1f64",
  measurementId: "G-PM9SJXNJWT"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
console.log('Auth object:', auth);
export { auth };
