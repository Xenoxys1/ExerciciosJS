const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a largura da parede: ", (lar) => {
  rl.question("Digite a altura da parede: ", (alt) => {
    console.log(
      `A área a ser pintada é de ${
        parseInt(alt) * parseInt(lar)
      }m², no entanto, será necessário ${
        parseFloat(parseInt(alt) * parseInt(lar)) / 2
      } litros de tinta para a pintura da parede.`
    );
    rl.close();
  });
});
