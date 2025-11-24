function carregarDados() {
  usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  livros = JSON.parse(localStorage.getItem("livros")) || [];
  emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];

}

function salvarDados() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("livros", JSON.stringify(livros));
  localStorage.setItem("emprestimos", JSON.stringify(emprestimos));
}

let usuarios = [];
let livros = [];
let emprestimos = [];

carregarDados();

function gerarId(lista) {
  const idsExistentes = lista.map(x => x.id);
  let novoId = 1;
  while (idsExistentes.includes(novoId)) novoId++;
  return novoId;
}

console.log("Sistema de Biblioteca iniciado. Use os comandos no console.");

function mostrarComandos() {
  console.log("");
  console.log("   SISTEMA DE BIBLIOTECA - MENU   ");
  console.log("");
  console.log("USUÁRIOS");
  console.log("cadastrarUsuarioPrompt()");
  console.log("listarUsuarios()");
  console.log("editarUsuario(id, novoNome, novoEmail)");
  console.log("excluirUsuario(id)");
  console.log("");
  console.log("LIVROS");
  console.log("cadastrarLivroPrompt()");
  console.log("listarLivros()");
  console.log("editarLivro(id, titulo, autor, ano, genero)");
  console.log("excluirLivro(id)");
  console.log("");
  console.log("EMPRÉSTIMOS");
  console.log("registrarEmprestimoPrompt()");
  console.log("listarEmprestimos()");
  console.log("devolverLivro(idEmprestimo)");
  console.log("");
  console.log("=====================================");
  console.log("Digite: mostrarComandos() para ver o menu novamente.");
  console.log("=====================================");
}

mostrarComandos();