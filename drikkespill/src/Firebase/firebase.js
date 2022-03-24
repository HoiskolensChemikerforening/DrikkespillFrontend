import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAs6zRmpXmZlmmDeCtOFeulxo4v0qPtIeA",
    authDomain: "drikkespill-c7188.firebaseapp.com",
    databaseURL: "https://drikkespill-c7188-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drikkespill-c7188",
    storageBucket: "drikkespill-c7188.appspot.com",
    messagingSenderId: "879998514120",
    appId: "1:879998514120:web:fd38ab2f8c6014bb42c6fd",
    measurementId: "G-63HY1WKNT8"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  export default database;