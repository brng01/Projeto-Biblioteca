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
    nome = prompt("Nome do usuário:");

    if (nome === null) {
      console.log("Cadastro cancelado pelo usuário.");
      return;
    }

    if (nome.trim() !== "") break;

    alert("O nome não pode estar vazio.");
  }

  function validarEmail(email) {
    if (!email) {
      return "O campo de e-mail não pode estar vazio.";
    }

    if (email.includes(" ")) {
      return "O e-mail não pode conter espaços.";
    }

    if (!email.includes("@")) {
      return "O e-mail precisa conter '@'.";
    }

    if (!email.match(/^[^\s@]+@[^\s@]+$/)) {
      return "O e-mail precisa ter texto antes e depois do '@'.";
    }

    if (!(email.endsWith(".com") || email.endsWith(".com.br"))) {
      return "O e-mail deve terminar em .com ou .com.br.";
    }

    const regex = /^[^\s@]+@[^\s@]+\.(com|com\.br)$/i;
    if (!regex.test(email)) {
      return "Formato de e-mail inválido.";
    }

    return true;
  }

  while (true) {
    email = prompt("E-mail do usuário:");

    if (email === null) {
      console.log("Cadastro cancelado pelo usuário.");
      return;
    }

    const resultado = validarEmail(email);

    if (resultado === true) break;

    alert("E-mail inválido: " + resultado);
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