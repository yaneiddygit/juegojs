let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const h1 = document.querySelector("h1");
const pMsg = document.querySelector(".texto__parrafo");
const input = document.getElementById("valorUsuario");
const btnIntentar = document.getElementById("btnIntentar");
const btnReiniciar = document.getElementById("btnReiniciar");

h1.innerText = "ADIVINA EL NÚMERO";

btnIntentar.addEventListener("click", intentoDeUsuario);
btnReiniciar.addEventListener("click", reiniciarJuego);

function intentoDeUsuario() {
  const valorUsuario = parseInt(input.value);

  if (isNaN(valorUsuario) || valorUsuario < 1 || valorUsuario > 10) {
    pMsg.innerText = "⚠️ Ingresa un número válido entre 1 y 10.";
    return;
  }

  intentos++;

  if (valorUsuario === numeroSecreto) {
    pMsg.innerText = `🎉 ¡Acertaste! El número secreto era ${numeroSecreto}. Lo lograste en ${intentos} intento(s).`;
    btnReiniciar.disabled = false;
    btnIntentar.disabled = true; // 🔴 Desactiva "Intentar"
  } else if (valorUsuario > numeroSecreto) {
    pMsg.innerText = "❌ El número secreto es menor. Intenta otra vez.";
  } else {
    pMsg.innerText = "❌ El número secreto es mayor. Intenta otra vez.";
  }
}

function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  h1.innerText = "ADIVINA EL NÚMERO";
  pMsg.innerText = "";
  input.value = "";
  btnReiniciar.disabled = true;
  btnIntentar.disabled = false; // 🔵 Reactiva "Intentar"
}
