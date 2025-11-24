// Empréstimos

function registrarEmprestimo(idUsuario, idLivro) {
  const usuario = usuarios.find(u => u.id === idUsuario);
  const livro = livros.find(l => l.id === idLivro);

  if (!usuario) return console.log("Usuário não existe.");
  if (!livro) return console.log("Livro não existe.");
  if (livro.emprestado) return console.log("Este livro já está emprestado.");

  livro.emprestado = true;

  const dataEmprestimo = new Date();
  const prazoDevolucao = new Date();
  prazoDevolucao.setDate(dataEmprestimo.getDate() + 7);

  emprestimos.push({
    id: gerarId(emprestimos),
    idUsuario: usuario.id,
    idLivro: livro.id,
    usuario: usuario.nome,
    livro: livro.titulo,
    dataEmprestimo: dataEmprestimo.toLocaleDateString(),
    prazoDevolucao: prazoDevolucao.toLocaleDateString(),
    status: "ativo"
  });

  salvarDados();

  console.log("Empréstimo registrado com sucesso!");
}


// Registro de empréstimo

function registrarEmprestimoPrompt() {

  console.log("=== SELECIONE O USUÁRIO ===");
  listarUsuarios();

  const idUsuario = Number(prompt("Informe o ID do USUÁRIO que fará o empréstimo:"));
  if (!idUsuario) return console.log("ID inválido.");

  console.log("=== SELECIONE O LIVRO ===");
  listarLivros();

  const idLivro = Number(prompt("Informe o ID do LIVRO para emprestar:"));
  if (!idLivro) return console.log("ID inválido.");

  registrarEmprestimo(idUsuario, idLivro);
}


// Listagem

function listarEmprestimos() {
  const lista = emprestimos.map(e => ({
    id: e.id,
    usuario: e.usuario,
    livro: e.livro,
    emprestadoEm: e.dataEmprestimo,
    prazo: e.prazoDevolucao,
    status: e.status
  }));

  console.table(lista);
}


// Devolução

function devolverLivroPrompt() {

  console.log("=== EMPRÉSTIMOS ATUAIS ===");
  listarEmprestimos();

  const id = Number(prompt("Informe o ID do EMPRÉSTIMO para devolver o livro:"));
  if (!id) return console.log("ID inválido.");

  devolverLivro(id);
}

function devolverLivro(idEmprestimo) {
  const emprestimo = emprestimos.find(e => e.id === idEmprestimo);
  if (!emprestimo) return console.log("Empréstimo não encontrado.");

  const livro = livros.find(l => l.id === emprestimo.idLivro);
  if (!livro) return console.log("Livro não encontrado.");

  livro.emprestado = false;
  emprestimo.status = "Devolvido";

  salvarDados();

  console.log("Livro devolvido com sucesso!");
}