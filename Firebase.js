let firebaseConfig = {
  apiKey: "AIzaSyDhiLDvkKNrI6_yPGB87597_E-5iaA2Iuo",
  authDomain: "data-remember-app.firebaseapp.com",
  databaseURL: "https://data-remember-app.firebaseio.com",
  projectId: "data-remember-app",
  storageBucket: "data-remember-app.appspot.com",
  messagingSenderId: "42974192190",
  appId: "1:42974192190:web:f5f1bc03afdb804eb7676f",
  measurementId: "G-RB5QQ1FMRK"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var firstName = document.querySelector('.first_name');