
/* pour le premier bouton (1) */

/* permet de sélectionner le bouton avec la classe number1 et le querySelector permet de cibler spécifiquement cet éléments */
let button1 = document.querySelector(".number1");
/* ajout d'un écouteur d'évènement et le click permet de déclencher la fonction  */
button1.addEventListener("click",Message);

/* on crée une fonctio Message et le messageElement.innerHTML permet de modifier le contenu */
function Message() {
  const messageElement = document.querySelector('#message');
  messageElement.innerHTML = "You selected 1 out of 5. Thank you!  We appreciate you taking the time to give a rating.   If you ever need more support,  don’t hesitate to get in touch!";
 
}

