// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5l72ueri9NE0SevEXOdC9Zfely3PWiGM",
  authDomain: "journalapp-805f2.firebaseapp.com",
  projectId: "journalapp-805f2",
  storageBucket: "journalapp-805f2.appspot.com",
  messagingSenderId: "38682255663",
  appId: "1:38682255663:web:7e82606d9b0d00fbc341da"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp)

//configuracion por defecto del Firestore//