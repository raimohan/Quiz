import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // NOTE: Replace with your own Firebase project credentials for full functionality.
  apiKey: "AIzaSyFAKE_API_KEY_FOR_DEMO_XXXX",
  authDomain: "agniveer-ascent.firebaseapp.com",
  projectId: "agniveer-ascent",
  storageBucket: "agniveer-ascent.appspot.com",
  messagingSenderId: "1057797745778",
  appId: "1:1057797745778:web:1e4e672727827827827827"
};

// This is enabled to allow seeing AI features, but authentication and database
// writes will fail until you provide your real Firebase project credentials above.
export const isFirebaseConfigured = true;

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app