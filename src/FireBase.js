// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUndDd7HdCsZTJ_sbvBPbm_YKsNKKPfww",
  authDomain: "admin-project-f4595.firebaseapp.com",
  projectId: "admin-project-f4595",
  storageBucket: "admin-project-f4595.firebasestorage.app",
  messagingSenderId: "275387287444",
  appId: "1:275387287444:web:9241d3902ca9aa73073181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);