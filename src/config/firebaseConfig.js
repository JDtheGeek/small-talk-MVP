import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC9TsXPBt0dZTIXxUnGZQ9G98ZCx5K9S8",
  authDomain: "nct-small-talk.firebaseapp.com",
  databaseURL: "https://nct-small-talk.firebaseio.com",
  projectId: "nct-small-talk",
  storageBucket: "nct-small-talk.appspot.com",
  messagingSenderId: "168652316779",
  appId: "1:168652316779:web:faa39c5bf82a520fb2912e",
  measurementId: "G-K98D75M3MS"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()