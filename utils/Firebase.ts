// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9mLMU3w079Tn-Z5HIMXt5dAbWdOi5DCc",
  authDomain: "tetris-2ebd9.firebaseapp.com",
  projectId: "tetris-2ebd9",
  storageBucket: "tetris-2ebd9.appspot.com",
  messagingSenderId: "1097388092406",
  appId: "1:1097388092406:web:6bcb22c6cc6316bd0335d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
