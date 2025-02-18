const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", (int1) => {
  console.log(
    `O antecessor do seu número é ${parseInt(int1) - 1}, já seu sucessor é ${
      parseInt(int1) + 1
    }`
  );
  rl.close();
});
