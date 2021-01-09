import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXTkttys13eI8q7dSU-77Rkrn4ZtB4FSw",
  authDomain: "facebook-thasa.firebaseapp.com",
  projectId: "facebook-thasa",
  storageBucket: "facebook-thasa.appspot.com",
  messagingSenderId: "479562631710",
  appId: "1:479562631710:web:53872746908bb6df58fc0f",
  measurementId: "G-62R3R5FXK0"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore();

  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;