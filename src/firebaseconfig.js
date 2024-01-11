// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcP5YbSYVeGqeaDPrgHNUyyjhFfzNKXXw",
  authDomain: "seniorproject-e4653.firebaseapp.com",
  projectId: "seniorproject-e4653",
  storageBucket: "seniorproject-e4653.appspot.com",
  messagingSenderId: "32700834728",
  appId: "1:32700834728:web:eea15adc78cd2bcb8eb39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
