// import "firebase/compat/auth";

import "firebase/compat/firestore";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"; // For Authentication

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAMU2JUncoX3Q7QArIVZ3roiY3qQK_MQyA",

  authDomain: "clone-6e083.firebaseapp.com",
  projectId: "clone-6e083",
  storageBucket: "clone-6e083.firebasestorage.app",
  messagingSenderId: "591375404900",
  appId: "1:591375404900:web:261aa6688efc155e14b471",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = app.firestore();
export const db = app.firestore();

