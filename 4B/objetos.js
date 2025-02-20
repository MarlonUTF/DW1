// Ex 1: Criando um Objeto Simples
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log(carro);
// { marca: "Toyota", modelo: "Corolla", ano: 2020 }

// Ex 2: Acessando Propriedades
console.log(carro.marca); // "Toyota"

carro.ano = 2021;
console.log(carro);
// { marca: "Toyota", modelo: "Corolla", ano: 2021 }

// Ex 3: Adicionando e Removendo Propriedades
carro.cor = "preto"; // Adiciona a propriedade cor
delete carro.modelo; // Remove a propriedade modelo

console.log(carro);
// { marca: "Toyota", ano: 2021, cor: "preto" }

// Ex 4: Objeto com Função (Método)
let pessoa = {
  nome: "João",
  idade: 25,
  cumprimentar: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoa.cumprimentar();
// "Olá, meu nome é João"

// Ex 5: Iteração sobre Propriedades
let produto = {
  nome: "Notebook",
  preco: 3500,
  categoria: "Eletrônicos"
};

for (let propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`);
}
// nome: Notebook
// preco: 3500
// categoria: Eletrônicos

// Ex 6: Array de Objetos
let biblioteca = [
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
  { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen", anoPublicacao: 1813 }
];

biblioteca.forEach(livro => console.log(livro.titulo));
// "O Senhor dos Anéis"
// "1984"
// "Orgulho e Preconceito"

// Ex 7: Cálculo com Métodos de Objeto
let carrinho = {
  itens: [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 100 }
  ],
  calcularTotal: function () {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }
};

console.log(carrinho.calcularTotal());
// Resultado esperado: 150

// Ex 8: Desestruturação de Objetos
let aluno = {
  nome: "Maria",
  idade: 21,
  curso: "Ciências da Computação"
};

let { nome, curso } = aluno;
console.log(`Nome: ${nome}, Curso: ${curso}`);
// Nome: Maria, Curso: Ciências da Computação

// Ex 9: Atualizando Objetos em um Array
let estoque = [
  { id: 1, nome: "Caneta", quantidade: 10 },
  { id: 2, nome: "Caderno", quantidade: 15 }
];

function atualizarQuantidade(idProduto, novaQuantidade) {
  let produto = estoque.find(item => item.id === idProduto);
  if (produto) {
    produto.quantidade = novaQuantidade;
  }
}

atualizarQuantidade(2, 30);
console.log(estoque);
// [{ id: 1, nome: "Caneta", quantidade: 10 }, { id: 2, nome: "Caderno", quantidade: 30 }]

// Ex 10: Extraindo Propriedades Específicas
let usuarios = [
  { nome: "Marlon", idade: 17, email: "marlon@gmail.com" },
  { nome: "Talisson", idade: 15, email: "talisson@gmail.com" },
  { nome: "Sidnei", idade: 45, email: "sidnei@gmail.com" }
];

let nomesEmails = usuarios.map(({ nome, email }) => ({ nome, email }));
console.log(nomesEmails);
// [{ nome: "Marlon", email: "marlon@gmail.com" }, 
//  { nome: "Talisson", email: "talisson@gmail.com" }, 
//  { nome: "Sidnei", email: "sidnei@gmail.com" }]
  