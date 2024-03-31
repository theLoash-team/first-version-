// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXsG6x3eQnzvIWBufRkcuZcdj9KpWaK1E",
  authDomain: "losch-9b0fb.firebaseapp.com",
  projectId: "losch-9b0fb",
  storageBucket: "losch-9b0fb.appspot.com",
  messagingSenderId: "65405967522",
  appId: "1:65405967522:web:7966bb15c15cfe58454bfb",
  measurementId: "G-8LJ1JP5NXY",
};

// Initialize Firebase
// extra step for server side rendering .....
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth };
