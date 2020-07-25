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

var db = firebase.firestore();

var firstName = document.querySelector('.first_name');
var secondName = document.querySelector('.second_name');
var thirdName = document.querySelector('.third_name');
var company = document.querySelector('.company');
var position = document.querySelector('.postion');
var date = document.querySelector('.date');
var month = document.querySelector('.month');
var year = document.querySelector('.year');

function createNewItem(firstName, secondName, thirdName, company, position, date, month, year) {
  db.collection('Users').add(
    {
      firstName: firstName,
      secondName: secondName,
      thirdName: thirdName,
      company: company,
      position: position,
      date: date,
      month: month,
      year: year
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    })
}

document.addEventListener('click', function(){
  createNewItem(firstName.value, secondName.value, thirdName.value, company.value, position.value, date.value, month.value, year.value);
})

function readAlldata(){
  return db.collection("Users").get();
}

readAlldata();