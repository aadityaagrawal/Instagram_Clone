import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDW4Gn8Cjex0cv2bssieUsY5FHZesU4Obs",
  authDomain: "instagram-clone-react-6c599.firebaseapp.com",
  projectId: "instagram-clone-react-6c599",
  storageBucket: "instagram-clone-react-6c599.appspot.com",
  messagingSenderId: "908552093286",
  appId: "1:908552093286:web:805be1512f12eee4f7f7a7",
  measurementId: "G-NR0TZS73K5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
