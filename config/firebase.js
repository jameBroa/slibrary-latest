// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
import {ref as refStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
  databaseURL: process.env.FIREBASE_DATABASEURL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth();
export const firestore = getFirestore(app);
// export const db = getDatabase(app); //otherdatabase
// export const database = getFirestore(app);

// export const uploadFromBlobAsync = async ({ blobUrl, name }) => {
//   if (!blobUrl || !name) return null

//   try {
//     const blob = await fetch(blobUrl).then((r) => r.blob())
//     const snapshot = await refStorage().child(name).put(blob)
//     return await snapshot.ref.getDownloadURL()
//   } catch (error) {
//     throw error
//   }
// }