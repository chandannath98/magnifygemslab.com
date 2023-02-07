// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQQDCzDZnseyxJoYJ08rpaRZDQFUh8kF0",
  authDomain: "omgtl-d6a0e.firebaseapp.com",
  projectId: "omgtl-d6a0e",
  storageBucket: "omgtl-d6a0e.appspot.com",
  messagingSenderId: "1050435789066",
  appId: "1:1050435789066:web:f204d11e13ea47f64a5af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore()
const auth=getAuth()

export {db,auth}
