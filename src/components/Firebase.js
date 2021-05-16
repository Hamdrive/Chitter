

const firebase = require("firebase/app")

require("firebase/auth")
require("firebase/firestore")

firebase.initializeApp( {
  apiKey: "AIzaSyAynGPc2xUSKQtXJM3tVG1V4qdGNM5QnGc",
  authDomain: "chitter-b1dfc.firebaseapp.com",
  projectId: "chitter-b1dfc",
  storageBucket: "chitter-b1dfc.appspot.com",
  messagingSenderId: "521524507667",
  appId: "1:521524507667:web:73269d103d6758fcd3fbe6",
});

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase