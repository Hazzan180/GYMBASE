import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAvouCWRdsJFd6mC0iaYnHEGXYPBkii4g",
  authDomain: "gymbase-61a61.firebaseapp.com",
  projectId: "gymbase-61a61",
  storageBucket: "gymbase-61a61.appspot.com",
  messagingSenderId: "186374289918",
  appId: "1:186374289918:web:fcbda98b4bd908f46168af",
  measurementId: "G-YK39S51T1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export default app;