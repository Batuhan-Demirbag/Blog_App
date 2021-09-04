import firebase from 'firebase/app';

import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB35GmRKEvf6DM4d_LMMlEnSids0UfoaJI",
  authDomain: "chatapp-ad30d.firebaseapp.com",
  projectId: "chatapp-ad30d",
  storageBucket: "chatapp-ad30d.appspot.com",
  messagingSenderId: "298321683865",
  appId: "1:298321683865:web:3f8efe5f156afdca509f08",
  measurementId: "G-SHKYLQ7YT2"
};

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  export {db}