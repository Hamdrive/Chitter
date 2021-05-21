import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfigs = {
  apiKey: "AIzaSyAynGPc2xUSKQtXJM3tVG1V4qdGNM5QnGc",
  authDomain: "chitter-b1dfc.firebaseapp.com",
  projectId: "chitter-b1dfc",
  storageBucket: "chitter-b1dfc.appspot.com",
  messagingSenderId: "521524507667",
  appId: "1:521524507667:web:73269d103d6758fcd3fbe6",
};

const firebaseApp = firebase.initializeApp(firebaseConfigs)

const db = firebaseApp.firestore()

export const auth = firebase.auth();
export default db;