const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu ano de nascimento: ", (ano) => {
  let idade;
  idade = 2025 - parseInt(ano);

  if (idade < 18) {
    console.log(`Ainda faltam ${18 - idade} anos para o seu alistamento!`);
  } else if (idade == 18) {
    console.log(`Você já pode se alistar!`);
  } else {
    console.log(
      `Você precisa se alistar! Já se passaram ${
        idade - 18
      } anos desde a data que você deveria se alistar!`
    );
  }
  rl.close();
});
