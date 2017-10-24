import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDygPn59euhnSo9sPmcesf2B5NeJAUsBsc",
  authDomain: "instantmail-app.firebaseapp.com",
  databaseURL: "https://instantmail-app.firebaseio.com",
  projectId: "instantmail-app",
  storageBucket: "instantmail-app.appspot.com",
  messagingSenderId: "255184327882"
};
firebase.initializeApp(config);

export const database = firebase.database
export const storage = firebase.storage()
export const auth = firebase.auth
export const googleProvider = new firebase.auth.GoogleAuthProvider()