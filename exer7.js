const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite quanto dinheiro você possui na carteira: ", (din) => {
  console.log(
    `Com R$${din} na sua carteira, você pode comprar US$${parseFloat(din) / 5}`
  );
  rl.close();
});
