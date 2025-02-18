const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do funcionário: ", (nome) => {
  rl.question("Digite o salário do funcionário: ", (salario) => {
    console.log(`O funcionário ${nome} recebe R$${salario} por mês.`);
    rl.close();
  });
});
