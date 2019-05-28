import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2hdQfkY-WyCGPvJuiHuCC638W0kJreWo",
  authDomain: "acmesil.firebaseapp.com",
  databaseURL: "https://acmesil.firebaseio.com",
  projectId: "acmesil",
  storageBucket: "acmesil.appspot.com",
  messagingSenderId: "184315516758",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
