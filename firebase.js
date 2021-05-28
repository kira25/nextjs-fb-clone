import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW3lT_1chDtN-9x3Gg1ARjkGxWGhW4XBY",
  authDomain: "facebook-2-version.firebaseapp.com",
  projectId: "facebook-2-version",
  storageBucket: "facebook-2-version.appspot.com",
  messagingSenderId: "632076906735",
  appId: "1:632076906735:web:c92e80b78f412b0a606b1a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
