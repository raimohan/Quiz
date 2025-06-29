import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// STEP 1: Go to https://console.firebase.google.com/ and create a new project.
// STEP 2: In your project's "Project settings", find the "Your apps" card.
// STEP 3: Click the web icon (</>) to register a new web app.
// STEP 4: After registration, Firebase will give you a `firebaseConfig` object.
// STEP 5: Copy that object and paste it here, completely replacing the object below.
const firebaseConfig = {
  // This is a placeholder configuration. Result saving will be disabled until
  // you replace this with your own project's credentials. If you publish
  // without replacing this, users will see an error.
  apiKey: "AIzaSyDbQMZJWwIXApuSwtz3kI6msUojdpAh4YU",
  authDomain: "agniveer-ascent-app.firebaseapp.com",
  projectId: "agniveer-ascent-app",
  storageBucket: "agniveer-ascent-app.firebasestorage.app",
  messagingSenderId: "789950458081",
  appId: "1:789950458081:web:b83ddac438af7851c22fa0"
};

// This flag is used to check if you have replaced the placeholder credentials.
export const isFirebaseConfigured = !firebaseConfig.apiKey.startsWith("AIzaSy");

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app);