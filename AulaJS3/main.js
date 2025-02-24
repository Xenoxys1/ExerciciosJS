document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("form-group");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //impedindo o comportamento padrão de recarregar a página
  adicionarContato();
});

function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const contato = { nome, telefone, email };
  salvarContato(contato);
  limparCampos();
  carregarContatos();
}

function salvarContato(contato) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function carregarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Nome:</strong> ${contato.nome}</p>
        <p><strong>Telefone:</strong> ${contato.telefone}</p>
        <p><strong>E-mail:</strong> ${contato.email}</p>
        <button type="button" class="delete" onclick="removerContato(${index})">X</button>
        <button type="button" class="update" onclick="atualizarContato(${index})">U</button>
        `;

    lista.appendChild(li);
  });
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}

function atualizarContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  const div = document.createElement("div");

  div.innerHTML = `
  <form id="form-edit">
        <input type="text" id="nomeEdit" placeholder="Digite seu nome" />
        <input type="tel" id="telefoneEdit" placeholder="Digite seu telefone" />
        <input type="email" id="emailEdit" placeholder="Digite seu email" />
        <button type="submit" id="save">Salvar</button>
      </form>
  `;

  const nome = document.getElementById("nomeEdit").value;
  const telefone = document.getElementById("telefoneEdit").value;
  const email = document.getElementById("emailEdit").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const contato = { nome, telefone, email };
  contatos.splice(index, 1, contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}
