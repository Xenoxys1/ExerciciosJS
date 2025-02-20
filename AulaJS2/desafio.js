const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o comprimento da primeira reta: ", (reta1) => {
  rl.question("Digite o comprimento da segunda reta: ", (reta2) => {
    rl.question("Digite o comprimento da terceira reta: ", (reta3) => {
      if (
        parseFloat(reta1) < parseFloat(reta2) + parseFloat(reta3) &&
        parseFloat(reta2) < parseFloat(reta1) + parseFloat(reta3) &&
        parseFloat(reta3) < parseFloat(reta1) + parseFloat(reta2)
      ) {
        console.log(`É possível formar um triângulo com estes comprimentos!`);
      } else {
        console.log(
          `Não é possível formar um triângulo com estes comprimentos.`
        );
      }
      rl.close();
    });
  });
});
