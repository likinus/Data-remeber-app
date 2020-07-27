
let now = new Date();
let birthdaysSection = document.querySelector('.birthdays__inner');
isBirtdayToday = false;

function readAllData() {
    return db.collection("Users").get()
  }
  
  readAllData()
  .then((users) => {
    users.forEach((doc) => { 
      if (new Date(doc.data().birthDate).getDate() === now.getDate() && new Date(doc.data().birthDate).getMonth() === now.getMonth()) {
          let p = document.createElement('p');
          p.textContent = `Сегодня день рождение у ${doc.data().firstName} ${doc.data().thirdName} ${doc.data().secondName}`
          birthdaysSection.appendChild(p);
          isBirtdayToday = true;
      } 
         })
         if (!isBirtdayToday) {
          let p = document.createElement('p');
          p.textContent = 'К сожалению сегодня нам некого поздравлять :(';
          birthdaysSection.appendChild(p);
        }
  })