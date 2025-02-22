// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkirF-iWxrjmQbgvyAwb-1OoesLOAZhsM",
  authDomain: "netflixg-520f4.firebaseapp.com",
  projectId: "netflixg-520f4",
  storageBucket: "netflixg-520f4.firebasestorage.app",
  messagingSenderId: "951556629268",
  appId: "1:951556629268:web:d466331f4e27fd1d385801",
  measurementId: "G-4B48WQ36CJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
