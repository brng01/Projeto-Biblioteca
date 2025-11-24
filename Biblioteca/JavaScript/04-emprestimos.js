// Empréstimos

function registrarEmprestimo(idUsuario, idLivro) {
  const usuario = usuarios.find(u => u.id === idUsuario);
  const livro = livros.find(l => l.id === idLivro);

  if (!usuario) return console.log("Usuário não existe.");
  if (!livro) return console.log("Livro não existe.");
  if (livro.emprestado) return console.log("Livro já emprestado.");

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

function registrarEmprestimoPrompt() {
  listarUsuarios();
  const idUsuario = Number(prompt("ID do usuário:"));

  listarLivros();
  const idLivro = Number(prompt("ID do livro:"));

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

function devolverLivro(idEmprestimo) {
  const emprestimo = emprestimos.find(e => e.id === idEmprestimo);
  if (!emprestimo) return console.log("Empréstimo não encontrado.");

  const livro = livros.find(l => l.id === emprestimo.idLivro);
  if (!livro) return console.log("Livro não encontrado.");

  livro.emprestado = false;

  emprestimo.status = "devolvido";

  salvarDados();

  console.log("Livro devolvido com sucesso!");
}