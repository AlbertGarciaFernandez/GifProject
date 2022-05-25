// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export function signInEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(email, password);
}

export function signUpEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(email, password);
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return currentUser;
}
