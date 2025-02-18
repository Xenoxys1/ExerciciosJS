const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome da disciplina: ", (dis) => {
  rl.question("Digite a primeira nota do aluno: ", (nota1) => {
    rl.question("Digite a segunda nota do aluno: ", (nota2) => {
      console.log(
        `Na disciplina de ${dis}, o aluno ficou com média ${
          (parseFloat(nota1) + parseFloat(nota2)) / 2
        }`
      );
      rl.close();
    });
  });
});
