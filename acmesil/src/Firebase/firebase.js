import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA2hdQfkY-WyCGPvJuiHuCC638W0kJreWo",
    authDomain: "acmesil.firebaseapp.com",
    databaseURL: "https://acmesil.firebaseio.com",
    projectId: "acmesil",
    storageBucket: "acmesil.appspot.com",
    messagingSenderId: "184315516758",
    appId: "1:184315516758:web:bf9f7e8e669fc3a1"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const db = firebase.database();
  const storage = firebase.storage();

  export {
    db,
    auth,
    storage,
  };