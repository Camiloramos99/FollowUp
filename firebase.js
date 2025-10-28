import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDt2n4Vi4M9yxix_G2YiVfW9qKJ-HdodTo",
  authDomain: "follow-up-a3a76.firebaseapp.com",
  projectId: "follow-up-a3a76",
  storageBucket: "follow-up-a3a76.appspot.com",
  messagingSenderId: "325063043083",
  appId: "1:325063043083:web:ee457138c4e4a5d9ad7f0e",
  measurementId: "G-CNEVLLSQ75",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };