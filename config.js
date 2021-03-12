import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCHJ8wl8Pou71ylB3Tw98KAXYVonFrhh8g",
    authDomain: "barter-system-a4452.firebaseapp.com",
    projectId: "barter-system-a4452",
    storageBucket: "barter-system-a4452.appspot.com",
    messagingSenderId: "686345593744",
    appId: "1:686345593744:web:6bb1f42dbf6c68137d8915"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()