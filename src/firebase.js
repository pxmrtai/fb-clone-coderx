import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAvNWsqaCmf2xhgeaaT5N5vd23sanHvC2c",
  authDomain: "coderx-facebook-clone.firebaseapp.com",
  projectId: "coderx-facebook-clone",
  storageBucket: "coderx-facebook-clone.appspot.com",
  messagingSenderId: "778938597089",
  appId: "1:778938597089:web:d5523f0c016bb7d8b141a0",
  measurementId: "G-JCGW5WYS1Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
