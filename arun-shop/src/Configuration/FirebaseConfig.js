import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCII-qeakfOGeXew6bZvBCZP0m3c6vIMGo",
  authDomain: "le-arun.firebaseapp.com",
  projectId: "le-arun",
  storageBucket: "le-arun.appspot.com",
  messagingSenderId: "758328776200",
  appId: "1:758328776200:web:0449e5311b4281ce6723bd",
  measurementId: "G-ZY4W8F0SR9",
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { app, db }