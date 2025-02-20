const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu nome: ", (nome) => {
  rl.question("Digite seu sexo: ", (sexo) => {
    rl.question("Quanto deram suas compras hoje? ", (valor) => {
      if (sexo == "Masculino") {
        console.log(
          `Olá, caro senhor ${nome}, você recebeu um desconto de 5% em suas compras. O valor atual é ${
            parseFloat(valor) - parseFloat(valor) * 0.05
          }`
        );
      } else if (sexo == "Feminino") {
        console.log(
          `Olá, cara senhora ${nome}, você recebeu um desconto de 13% em suas compras. O valor atual é ${
            parseFloat(valor) - parseFloat(valor) * 0.13
          }`
        );
      }
      rl.close();
    });
  });
});
