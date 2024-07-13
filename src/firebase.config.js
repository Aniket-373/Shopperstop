// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdR9tGp7n68CG11l1LdNzCzUKx3xXoZAs",
  authDomain: "shopperstop-27296.firebaseapp.com",
  projectId: "shopperstop-27296",
  storageBucket: "shopperstop-27296.appspot.com",
  messagingSenderId: "1097250423930",
  appId: "1:1097250423930:web:969b6eb3974ed33ea3a7c3",
  measurementId: "G-1XQPYLRJGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);