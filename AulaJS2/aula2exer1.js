const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite a velocidade percorrida pelo carro em quilômetros: ",
  (vel) => {
    console.log(
      `O carro percorreu ${vel}Km/h. Lembre-se que o limite de velocidade é de 80Km/h!`
    );
    if (parseInt(vel) > 80) {
      console.log(
        `O motorista percorreu ${
          parseInt(vel) - 80
        }Km/h à mais que o limite permitido, foi multado em R$${
          (parseInt(vel) - 80) * 5
        }`
      );
    }
    rl.close();
  }
);
