// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaB_5u-L7iIdbP3Bl5og5GwHUtjbOJew4",
  authDomain: "auth-app-c8ffb.firebaseapp.com",
  projectId: "auth-app-c8ffb",
  storageBucket: "auth-app-c8ffb.firebasestorage.app",
  messagingSenderId: "470606949622",
  appId: "1:470606949622:web:d0bd735a913401771890d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);