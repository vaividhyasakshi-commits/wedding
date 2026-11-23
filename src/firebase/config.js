import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Web configuration copied from your uploaded Firebase project.
// Firebase security is enforced by Authentication + Firestore Rules, not by hiding these values.
const firebaseConfig = {
  apiKey: "AIzaSyCjZzJgj5p2ZrABItMmr-lkEOCtB0KxyR4",
  authDomain: "wedding-a3f5b.firebaseapp.com",
  projectId: "wedding-a3f5b",
  storageBucket: "wedding-a3f5b.firebasestorage.app",
  messagingSenderId: "135127014069",
  appId: "1:135127014069:web:ac9e3cd4b9c8424ef1bcfc"
};
export const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
