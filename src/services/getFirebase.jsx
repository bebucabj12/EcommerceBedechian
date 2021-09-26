// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'

//Conección desde la app a firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwRGzuQ05dFVXZLX1CQhVVcaMAkp4HkJw",
  authDomain: "wey-cfc3a.firebaseapp.com",
  projectId: "wey-cfc3a",
  storageBucket: "wey-cfc3a.appspot.com",
  messagingSenderId: "818070283202",
  appId: "1:818070283202:web:64a3bc16a9c96d31b9ec5b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Inicializa la app
export function getFirebase() {
    return app
}

//Inicializa firestore
export function getFirestore() {
    return firebase.firestore(app)
}