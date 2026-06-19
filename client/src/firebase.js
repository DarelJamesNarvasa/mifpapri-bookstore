import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDK74QzCIkGI-P60MNK0gmMeljmAxKdFSY",
  authDomain: "mifpapri-db.firebaseapp.com",
  projectId: "mifpapri-db",
  storageBucket: "mifpapri-db.firebasestorage.app",
  messagingSenderId: "543049409000",
  appId: "1:543049409000:web:17d9ac986e2375d918045d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;