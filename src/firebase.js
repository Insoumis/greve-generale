import firebase from 'firebase';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyAuo2AOyWd2ddVDpl-lMSEx_svOXmpF9CI",
    authDomain: "greve-generale.firebaseapp.com",
    databaseURL: "https://greve-generale.firebaseio.com",
    projectId: "greve-generale",
    storageBucket: "greve-generale.appspot.com",
    messagingSenderId: "1069259462051"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;