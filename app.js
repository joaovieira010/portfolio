import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAayyIf1WDduFiDG8nve0iepDVDXQcCTOU",
  authDomain: "lanchonete-app-bc614.firebaseapp.com",
  projectId: "lanchonete-app-bc614",
  storageBucket: "lanchonete-app-bc614.firebasestorage.app",
  messagingSenderId: "428696288941",
  appId: "1:428696288941:web:54f8b4eb0ec5474886d024"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const listaProdutos = document.getElementById("produtos");

async function carregarProdutos() {
  const querySnapshot = await getDocs(collection(db, "produtos"));

  listaProdutos.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const produto = doc.data();

    listaProdutos.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}" width="200">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p><strong>R$ ${produto.preco}</strong></p>
      </div>
    `;
  });
}

carregarProdutos();