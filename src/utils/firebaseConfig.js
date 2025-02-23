import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkirF-iWxrjmQbgvyAwb-1OoesLOAZhsM",
  authDomain: "netflixg-520f4.firebaseapp.com",
  projectId: "netflixg-520f4",
  storageBucket: "netflixg-520f4.firebasestorage.app",
  messagingSenderId: "951556629268",
  appId: "1:951556629268:web:d466331f4e27fd1d385801",
  measurementId: "G-4B48WQ36CJ", // Optional (delete if unused)
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Fixed
