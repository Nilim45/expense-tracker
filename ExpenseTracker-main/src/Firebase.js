import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD39hkm2shiHReFowSfRhZNYN_rpw6bQkE",
  authDomain: "expense-tracker-25fbe.firebaseapp.com",
  projectId: "expense-tracker-25fbe",
  storageBucket: "expense-tracker-25fbe.firebasestorage.app",
  messagingSenderId: "455761208944",
  appId: "1:455761208944:web:2f4e583f7b8ae8710e76b5"
};

const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

