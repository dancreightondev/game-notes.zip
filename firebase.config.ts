// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.FIREBASE_MSG_SENDER_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
};

// Initialise Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialise Firestore
const firestore = getFirestore();

// Initialise Firebase auth
export const firebaseAuth = getAuth(firebaseApp);

// Export Firebase app instance
export default firebaseApp;
