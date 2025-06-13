// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mycontacts-3d2e0.firebaseapp.com",
  projectId: "mycontacts-3d2e0",
  storageBucket: "mycontacts-3d2e0.firebasestorage.app",
  messagingSenderId: "491129575509",
  appId: "1:491129575509:web:edcbf4ce31f8bab45cdcdc",
  measurementId: "G-N4SF6XPN4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };