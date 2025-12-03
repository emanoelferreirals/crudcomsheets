const URL = "https://script.google.com/macros/s/AKfycbxIFnByuPQRTY6MuMtz1QkPbmpIqEV5HNKg8Zs9XaGk9DLsrz4zUxTyi9_hHvtScFhM/exec";

function criar() {
  const data = {
    id: document.getElementById("id").value,
    nome: document.getElementById("nome").value,
    idade: document.getElementById("idade").value
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(r => r.text())
  .then(t => mostrar("Criado: " + t));
}

function ler() {
  fetch(URL)
    .then(r => r.json())
    .then(d => mostrar(JSON.stringify(d, null, 2)));
}

function atualizar() {
  const data = {
    id: document.getElementById("id").value,
    nome: document.getElementById("nome").value,
    idade: document.getElementById("idade").value
  };

  fetch(URL, {
    method: "PUT",
    body: JSON.stringify(data)
  })
  .then(r => r.text())
  .then(t => mostrar("Atualizado: " + t));
}

function deletar() {
  const id = document.getElementById("id").value;

  fetch(URL + "?id=" + id, {
    method: "DELETE"
  })
  .then(r => r.text())
  .then(t => mostrar("Deletado: " + t));
}

function mostrar(txt) {
  document.getElementById("resultado").textContent = txt;
}
