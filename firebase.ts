// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxDBInTBYHr3SfpLUVkLR4KKWBHMkpjbI",
  authDomain: "netflix-clone-79c92.firebaseapp.com",
  projectId: "netflix-clone-79c92",
  storageBucket: "netflix-clone-79c92.appspot.com",
  messagingSenderId: "394285854487",
  appId: "1:394285854487:web:c130f1fe4384054d5dd152"
};

// Initialize Firebase
// se o app ja esta inicializado nao o inicia de novo
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };