// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyALepsBHSuyscFzxOhvA64cQm6VS-d0UMc",
    authDomain: "firechat-681de.firebaseapp.com",
    projectId: "firechat-681de",
    storageBucket: "firechat-681de.appspot.com",
    messagingSenderId: "799021026181",
    appId: "1:799021026181:web:160efafc3f26a11e8a12ec",
    measurementId: "G-7ZW72GSK6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;