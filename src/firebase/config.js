import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtcvJnjXglBgPlce_4hnKW7xR1HmSSNEY",
  authDomain: "umkm-7841a.firebaseapp.com",
  projectId: "umkm-7841a",
  storageBucket: "umkm-7841a.firebasestorage.app",
  messagingSenderId: "120755963861",
  appId: "1:120755963861:web:dd4a7ae921f7b035af5f5c",
  measurementId: "G-Z883XP0FKB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;