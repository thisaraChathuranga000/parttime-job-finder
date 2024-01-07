import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCJCOINosWhPZg1nV_VDzMAb4n0podtt6E",
    authDomain: "parttimez.firebaseapp.com",
    projectId: "parttimez",
    storageBucket: "parttimez.appspot.com",
    messagingSenderId: "960477944986",
    appId: "1:960477944986:web:e1a62108fb23b3a0739323",
    measurementId: "G-X3QZ429CPQ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);