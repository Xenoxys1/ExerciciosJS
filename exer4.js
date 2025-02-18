const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", (int1) => {
  rl.question("Digite outro inteiro: ", (int2) => {
    console.log(
      `A soma dos dois números é: ${parseInt(int1) + parseInt(int2)}`
    );
    rl.close();
  });
});
