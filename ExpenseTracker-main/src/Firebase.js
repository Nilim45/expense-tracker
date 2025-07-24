import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCC-a_MtiI497nPd-Xlx08Rb6UQwEEXOxw",
  authDomain: "expense-tracker-3d1a9.firebaseapp.com",
  projectId: "expense-tracker-3d1a9",
  storageBucket: "expense-tracker-3d1a9.firebasestorage.app",
  messagingSenderId: "29768255694",
  appId: "1:29768255694:web:ab8f4af0b0c7e450b9289f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

