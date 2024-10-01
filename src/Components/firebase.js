// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDvL-t7-F3aHR1gdOM9F4hMzVdqMYUl2dg",
  authDomain: "phone-auth-79247.firebaseapp.com",
  projectId: "phone-auth-79247",
  storageBucket: "phone-auth-79247.appspot.com",
  messagingSenderId: "644797204594",
  appId: "1:644797204594:web:a8689d3050583dd0a41aeb",
  measurementId: "G-3Y3XH100C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

