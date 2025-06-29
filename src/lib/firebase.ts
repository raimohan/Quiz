import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// STEP 1: Go to https://console.firebase.google.com/ and create a new project.
// STEP 2: In your project's "Project settings", find the "Your apps" card.
// STEP 3: Click the web icon (</>) to register a new web app.
// STEP 4: After registration, Firebase will give you a `firebaseConfig` object.
// STEP 5: Copy that object and paste it here, completely replacing the object below.
const firebaseConfig = {
  // This is a placeholder configuration. AI features and result saving will
  // be disabled until you replace this with your own project's credentials.
  apiKey: "AIzaSyAPI_KEY_PLACEHOLDER_REPLACE_ME",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

// This flag is used to enable Firebase-dependent features.
// It is set based on whether you have replaced the placeholder credentials.
export const isFirebaseConfigured = !firebaseConfig.apiKey.includes("PLACEHOLDER");

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app);
