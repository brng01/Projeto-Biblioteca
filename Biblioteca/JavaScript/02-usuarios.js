function cadastrarUsuario(nome, email) {
  const id = gerarId(usuarios);
  usuarios.push({ id, nome, email });
  salvarDados();
}

function cadastrarUsuarioPrompt() {
  let nome, email;

  while (!nome) {
    nome = prompt("Nome completo:");
  }
  while (!email) {
    email = prompt("E-mail:");
  }

  cadastrarUsuario(nome, email);
  console.log("Usuário cadastrado com sucesso!");
}

function listarUsuarios() {
  console.table(usuarios);
}

function editarUsuario(id, novoNome, novoEmail) {
  const user = usuarios.find(u => u.id === id);
  if (!user) return console.log("Usuário não encontrado.");

  user.nome = novoNome;
  user.email = novoEmail;
  salvarDados();
}

function excluirUsuario(id) {
  usuarios = usuarios.filter(u => u.id !== id);
  salvarDados();
}