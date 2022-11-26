// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAHVN5g20hlhzgKXwiOsfYZ3XSxWviwHQ",
  authDomain: "crud-2006e.firebaseapp.com",
  projectId: "crud-2006e",
  storageBucket: "crud-2006e.appspot.com",
  messagingSenderId: "598088509050",
  appId: "1:598088509050:web:b9b1a368ee667ac8ddbdc3",
  measurementId: "G-ZQNPTT7V8P"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);