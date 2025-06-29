import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // NOTE: Replace with your own Firebase project credentials for full functionality.
  apiKey: "AIzaSyAPI_KEY_PLACEHOLDER_REPLACE_ME",
  authDomain: "agniveer-ascent.firebaseapp.com",
  projectId: "agniveer-ascent",
  storageBucket: "agniveer-ascent.appspot.com",
  messagingSenderId: "1057797745778",
  appId: "1:1057797745778:web:1e4e672727827827827827"
};

// This flag is used to enable Firebase-dependent features.
// It is set based on whether you have replaced the placeholder credentials.
export const isFirebaseConfigured = !firebaseConfig.apiKey.includes("PLACEHOLDER");

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app);
