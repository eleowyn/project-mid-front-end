// firebase.js
// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import the database module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-cbXb-aiVmon3Dhfk_qvI3bahm6kVbU",
  authDomain: "portfolio-website-elshera.firebaseapp.com",
  databaseURL: "https://portfolio-website-elshera-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-elshera",
  storageBucket: "portfolio-website-elshera.firebasestorage.app",
  messagingSenderId: "224021338420",
  appId: "1:224021338420:web:4fd78512dfdb3ad03fad61",
  measurementId: "G-FVFE5B8BNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export the database
const database = getDatabase(app);

export { app, analytics, database };
