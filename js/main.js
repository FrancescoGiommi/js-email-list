/* Descrizione
Attraverso l'apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email
  e stamparli in pagina all'interno di una lista.
  
  Bonus
     Abbellire con CSS o Bootstrap
    Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre) */

/* dichiaro gli elementi */
const mail1El = document.getElementById("mail-1");
const mail2El = document.getElementById("mail-2");
const mail3El = document.getElementById("mail-3");
const mail4El = document.getElementById("mail-4");
const mail5El = document.getElementById("mail-5");
const mail6El = document.getElementById("mail-6");
const mail7El = document.getElementById("mail-7");
const mail8El = document.getElementById("mail-8");
const mail9El = document.getElementById("mail-9");
const mail10El = document.getElementById("mail-10");
const btnMailEl = document.getElementById("btn-mail");

/* creo la variabile mail */
let email;

/*const mailList = (mail) => {
  for (let i = 0; i <= 10; i++) {

  }
};*/

/*btnMailEl.addEventListener(("click", () => {}));*/

/* Assegno agli elementi l'email generata dall'API */

/* Email 1 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail1El.innerText = email;
  });

/* Email 2 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail2El.innerText = email;
  });

/* Email 3 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail3El.innerText = email;
  });

/* Email 4 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail4El.innerText = email;
  });

/* Email 5 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail5El.innerText = email;
  });

/* Email 6 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail6El.innerText = email;
  });

/* Email 7 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail7El.innerText = email;
  });

/* Email 8 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail8El.innerText = email;
  });

/* Email 9 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail9El.innerText = email;
  });

/* Email 10 */
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    email = data.response;
    mail10El.innerText = email;
  });
