import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBla8kpxl-RSy3bx96wP3sdj5zyyAnvFhg",
  authDomain: "psurveys-web.firebaseapp.com",
  projectId: "psurveys-web",
  storageBucket: "psurveys-web.appspot.com",
  messagingSenderId: "382207510424",
  appId: "1:382207510424:web:27a4be1d7ab609deb98ded",
  databaseURL: "https://psurveys-web-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Realtime Database
export const database = getDatabase(app);
