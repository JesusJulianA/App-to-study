import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4n1Y--ASoP0ST7cS_O_h0-bSn5bha9J8",
  authDomain: "flascards-native.firebaseapp.com",
  projectId: "flascards-native",
  storageBucket: "flascards-native.appspot.com",
  messagingSenderId: "123669712072",
  appId: "1:123669712072:web:0c02bcd050dae369a929fd"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

export const categories = db.collection('categories');
export const cards = db.collection('cards');
