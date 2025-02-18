const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome do funcionário: ", (nome) => {
  rl.question("Quantos dias esse funcionário trabalhou em um mês? ", (dias) => {
    console.log(
      `O funcionário ${nome} trabalhou ${dias} dias em um mês. Nesse caso, ele possui um salário de R$${
        parseInt(dias) * 8 * 25
      }`
    );
    rl.close();
  });
});
