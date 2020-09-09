import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBEGWy9pM8q1mBVIrsCq5q9JqCu7OyULGo",
  authDomain: "whatsappclone-c6fc3.firebaseapp.com",
  databaseURL: "https://whatsappclone-c6fc3.firebaseio.com",
  projectId: "whatsappclone-c6fc3",
  storageBucket: "whatsappclone-c6fc3.appspot.com",
  messagingSenderId: "1084085432373",
  appId: "1:1084085432373:web:6a82fdea70f8cee71d417c",
  measurementId: "G-V3TM1YGF57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;

