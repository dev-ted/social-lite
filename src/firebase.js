import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyCuau0EBzWjRtA_9YlF1XqJ8xgxp-FJ1Mw",
    authDomain: "developerted.firebaseapp.com",
    projectId: "developerted",
    storageBucket: "developerted.appspot.com",
    messagingSenderId: "1034367334540",
    appId: "1:1034367334540:web:78fc0d9328be415cb8e3a9",
    measurementId: "G-2EQS36LC3E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const database = firebaseApp.database()

  export {db ,auth};
  