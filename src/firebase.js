// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCTLdmkmRWfwh7oP9m_QhOwc8o2OOtljBg",

  authDomain: "connectfirestore-166ac.firebaseapp.com",

  projectId: "connectfirestore-166ac",

  storageBucket: "connectfirestore-166ac.appspot.com",

  messagingSenderId: "674333008962",

  appId: "1:674333008962:web:f1cd1208f5100f524139db"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);