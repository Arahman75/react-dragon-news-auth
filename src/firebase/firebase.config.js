// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcM4xcZK-aqDKBfb075lAUxKGux-QqLNg",
    authDomain: "react-dragon-news-auth-c389b.firebaseapp.com",
    projectId: "react-dragon-news-auth-c389b",
    storageBucket: "react-dragon-news-auth-c389b.appspot.com",
    messagingSenderId: "149981607005",
    appId: "1:149981607005:web:a6c00ee29ca3ee826e09b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;