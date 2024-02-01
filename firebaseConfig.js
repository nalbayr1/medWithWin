// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Make sure to import getAuth
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Sl2lmQAtGF0CKzSJEQ7M7zFsF8PBjLU",
  authDomain: "medofthetap.firebaseapp.com",
  projectId: "medofthetap",
  storageBucket: "medofthetap.appspot.com",
  messagingSenderId: "306331432148",
  appId: "1:306331432148:web:3f42c31d32db56573eb741",
  measurementId: "G-GE9BE4Y4NT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth instance
const auth = getAuth(app);

// Initialize Firebase Analytics only on the client side
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

// Export the auth instance to use throughout your app
export { auth };
