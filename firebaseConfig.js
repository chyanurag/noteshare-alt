import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAeCC7YP9SaUFVAW7ZuoXt44QWEhxhff5Y",
  authDomain: "mini-project-37eb2.firebaseapp.com",
  projectId: "mini-project-37eb2",
  storageBucket: "mini-project-37eb2.appspot.com",
  messagingSenderId: "361613984424",
  appId: "1:361613984424:web:cb7ccdc585a89da151b89d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {
})
const db  = getFirestore(app)
const storage = getStorage()

export { auth }
export { db } 
export { storage } 
