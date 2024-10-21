
/* pour le premier bouton (1) */
let button1 = document.querySelector(".number1");
button1.addEventListener("click",Message);


function Message() {
  const messageElement = document.querySelector('#message');
  messageElement.innerHTML = "You selected 1 out of 5. Thank you!  We appreciate you taking the time to give a rating.   If you ever need more support,  don’t hesitate to get in touch!";
 
}

