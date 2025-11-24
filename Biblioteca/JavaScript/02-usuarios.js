// Usuários

function cadastrarUsuario(nome, email) {
  const id = gerarId(usuarios);
  usuarios.push({ id, nome, email });
  salvarDados();
  console.log("Usuário cadastrado com sucesso!");
}

// Cadastro

function cadastrarUsuarioPrompt() {
  let nome, email;

  while (true) {
    nome = prompt("Nome completo do usuário:");

    if (nome === null) {
      console.log("Cadastro cancelado pelo usuário.");
      return;
    }

    if (nome.trim() !== "") break;
  }

const emailValido = (email) => {
  if (!email) return false;

  const regex = /^[^\s@]+@[^\s@]+\.(com|com\.br)$/i;
  return regex.test(email);
};

  while (true) {
    email = prompt("E-mail do usuário");

    if (email === null) {
      console.log("Cadastro cancelado pelo usuário.");
      return;
    }

    if (emailValido(email)) break;
  }

  cadastrarUsuario(nome, email);
  console.log("Usuário cadastrado com sucesso!");
}


// Listagem

function listarUsuarios() {
  console.table(usuarios);
}


// Edição

function editarUsuarioPrompt() {

  console.log("=== LISTA DE USUÁRIOS ===");
  listarUsuarios();

  let id = Number(prompt("Informe o ID do usuário que deseja EDITAR:"));
  if (!id) return console.log("ID inválido.");

  const user = usuarios.find(u => u.id === id);
  if (!user) return console.log("Usuário não encontrado.");

  let novoNome = prompt(`Novo nome (atual: ${user.nome}):`);
  let novoEmail = prompt(`Novo e-mail (atual: ${user.email}):`);

  user.nome = novoNome || user.nome;
  user.email = novoEmail || user.email;

  salvarDados();

  console.log("Usuário editado com sucesso!");
}

function editarUsuario(id, novoNome, novoEmail) {
  const user = usuarios.find(u => u.id === id);
  if (!user) return console.log("Usuário não encontrado.");

  user.nome = novoNome;
  user.email = novoEmail;

  salvarDados();
}


//Excluir

function excluirUsuarioPrompt() {
  console.log("=== LISTA DE USUÁRIOS ===");
  listarUsuarios();

  const id = Number(prompt("Informe o ID do usuário que deseja EXCLUIR:"));
  if (!id) return console.log("ID inválido.");

  excluirUsuario(id);
}

function excluirUsuario(id) {
  const existe = usuarios.some(u => u.id === id);
  if (!existe) return console.log("Usuário não encontrado.");

  usuarios = usuarios.filter(u => u.id !== id);
  salvarDados();

  console.log("Usuário removido com sucesso!");
}