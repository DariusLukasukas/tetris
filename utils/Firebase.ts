// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.NEXT_APP_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_APP_FIREBASE_PROJECT_ID;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket: "tetris-2ebd9.appspot.com",
  messagingSenderId: "1097388092406",
  appId: "1:1097388092406:web:6bcb22c6cc6316bd0335d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
