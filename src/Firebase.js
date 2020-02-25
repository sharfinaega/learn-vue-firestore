import firebase from "firebase";

// const settings = { timesStampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBqjvD_KlrOl1ALZjVlP1JTCAaSbxssCEM",
  authDomain: "belajar-56b97.firebaseapp.com",
  databaseURL: "https://belajar-56b97.firebaseio.com",
  projectId: "belajar-56b97",
  storageBucket: "belajar-56b97.appspot.com",
  messagingSenderId: "169161190663",
  appId: "1:169161190663:web:3cdc35c40c7f6dfcade9a2"
};
firebase.initializeApp(config);

// firebase.firestore().settings(settings);

export default firebase;
