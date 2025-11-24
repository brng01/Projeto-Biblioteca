// Livros

function cadastrarLivro(titulo, autor, ano, genero) {
  const id = gerarId(livros);
  livros.push({ id, titulo, autor, ano, genero, emprestado: false });
  salvarDados();
}

const livrosPadrao = [
    { id: 1, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia", emprestado: false, padrao: true },
    { id: 2, titulo: "A Droga do Amor", autor: "Pedro Bandeira", ano: 1994, genero: "Romance Juvenil", emprestado: false, padrao: true },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", emprestado: false, padrao: true },
    { id: 4, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Fábula", emprestado: false, padrao: true },
    { id: 5, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia", emprestado: false, padrao: true }
  ]

  if (livros.length === 0) {
    livros = [...livrosPadrao];
    salvarDados();
  }

function cadastrarLivroPrompt() {
  let titulo, autor, ano, genero;

  while (!titulo) titulo = prompt("Título do livro:");
  while (!autor) autor = prompt("Autor:");
  while (!ano) ano = prompt("Ano:");
  while (!genero) genero = prompt("Gênero:");

  cadastrarLivro(titulo, autor, ano, genero);
  console.log("Livro cadastrado!");
}

// Listagem

function listarLivros() {
  const lista = livros
    .sort((a, b) => (b.padrao ? 1 : 0) - (a.padrao ? 1 : 0)) // padrões primeiro
    .map(l => ({
      id: l.id,
      titulo: l.titulo,
      autor: l.autor,
      ano: l.ano,
      genero: l.genero,
      emprestado: l.emprestado ? "Sim" : "Não",
      padrao: l.padrao ? "Sim" : "Não"
    }));

  console.table(lista);
}

// Edição

function editarLivro(id, titulo, autor, ano, genero) {
  const livro = livros.find(l => l.id === id);

  if (!livro) return console.log("Livro não encontrado.");

  if (livro.padrao) {
    console.log("Este livro é padrão e NÃO pode ser editado.");
    return;
  }

  livro.titulo = titulo ?? livro.titulo;
  livro.autor = autor ?? livro.autor;
  livro.ano = ano ?? livro.ano;
  livro.genero = genero ?? livro.genero;

  salvarDados();
  console.log("Livro editado com sucesso!");
}

// Exclusão

function excluirLivro(id) {
  const livro = livros.find(l => l.id === id);

  if (!livro) return console.log("Livro não encontrado.");

  if (livro.padrao) {
    console.log("Este livro é padrão do sistema e NÃO pode ser excluído.");
    return;
  }

  livros = livros.filter(l => l.id !== id);
  salvarDados();
  console.log("Livro removido com sucesso.");
}