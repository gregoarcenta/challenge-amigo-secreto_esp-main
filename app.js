// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigosArray = [];

amigo.addEventListener("keyup", (e) => {
  if (e.key === "Enter") agregarAmigo();
});

function agregarAmigo() {
  const value = amigo.value;
  if (value <= 0) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigosArray.push(value.trim());
  amigo.value = "";

  actualizarLista();
}

function actualizarLista() {
  listaAmigos.innerHTML = "";
  amigosArray.forEach((amigo) => {
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
  });
}

function sortearAmigo() {
  if (amigosArray.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
  const amigoSorteado = amigosArray[indiceAleatorio];

  resultado.innerText = `🎉 El amigo secreto sorteado es: ${amigoSorteado}`;

  amigosArray = [];
  actualizarLista()
}
