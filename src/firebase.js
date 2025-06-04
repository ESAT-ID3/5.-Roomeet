// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANxIIupvkcseg-I8Qg24LRKQqw3_vstcg",
  authDomain: "roomeet-id3.firebaseapp.com",
  projectId: "roomeet-id3",
  storageBucket: "roomeet-id3.firebasestorage.app",
  messagingSenderId: "113449508845",
  appId: "1:113449508845:web:ccc2608b6065dbcbd051e4",
  measurementId: "G-L6CSTXEQQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);