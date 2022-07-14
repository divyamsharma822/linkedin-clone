// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJxSWajH5NHxeN9vp5bCnmR-Nowm__qUc",
  authDomain: "linkedin-clone-767d8.firebaseapp.com",
  projectId: "linkedin-clone-767d8",
  storageBucket: "linkedin-clone-767d8.appspot.com",
  messagingSenderId: "635117020180",
  appId: "1:635117020180:web:45481eae6c2bc0e551b301"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp()

const db = getFirestore(app);
// const auth = getAuth(app);

export { db };