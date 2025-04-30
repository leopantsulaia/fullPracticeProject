import { getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCG9t0xHZB4llfb_vN8Q-7LU9QMB_99_eY",
  authDomain: "epic-chats.firebaseapp.com",
  projectId: "epic-chats",
  storageBucket: "epic-chats.appspot.com",
  messagingSenderId: "942478308579",
  appId: "1:942478308579:web:849250085b80a1808181d6",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, storage };
