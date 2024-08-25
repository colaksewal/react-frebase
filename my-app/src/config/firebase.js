// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider } from 'firebase/auth' ;

const firebaseConfig = {
  apiKey: "AIzaSyCs_jg63ULh5TrvBosHf0LvPsA0mMwCiz0",
  authDomain: "react-firebase-c84ac.firebaseapp.com",
  projectId: "react-firebase-c84ac",
  storageBucket: "react-firebase-c84ac.appspot.com",
  messagingSenderId: "1097550857105",
  appId: "1:1097550857105:web:c73f072772e6df9c8e5030",
  measurementId: "G-2FRY44VNF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();