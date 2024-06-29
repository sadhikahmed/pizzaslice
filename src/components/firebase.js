import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2h-3h1gmLrHVLUPvO-psIyGVCc0BFGaA",
  authDomain: "loginpage-3bf08.firebaseapp.com",
  projectId: "loginpage-3bf08",
  storageBucket: "loginpage-3bf08.appspot.com",
  messagingSenderId: "795743802597",
  appId: "1:795743802597:web:55688a4028ad0f2789300c",
  measurementId: "G-9BG5QE6H9L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
