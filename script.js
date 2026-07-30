document.getElementById("ano").textContent = new Date().getFullYear();

const botao = document.getElementById("btn-contato");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.classList.remove("hidden");
});