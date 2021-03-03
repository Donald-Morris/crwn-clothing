import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAR1c_85n6LaplXhtSDHseDaURjqzgwO8c',
  authDomain: 'crwn-db-b2dc9.firebaseapp.com',
  projectId: 'crwn-db-b2dc9',
  storageBucket: 'crwn-db-b2dc9.appspot.com',
  messagingSenderId: '894816983270',
  appId: '1:894816983270:web:51eb1dac5abe6dcdbe8327',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
