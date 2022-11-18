// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzc8fgbs-RwpLx5ghum-7JG_pCfGa43Vc",
    authDomain: "elambrosiaph.firebaseapp.com",
    projectId: "elambrosiaph",
    storageBucket: "elambrosiaph.appspot.com",
    messagingSenderId: "669960327175",
    appId: "1:669960327175:web:0edc541bb4534461095aa2",
    measurementId: "G-Q23SVKB5PZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, 'CLIENT');
export const auth = getAuth(app)