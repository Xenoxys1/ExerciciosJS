const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quanto você deseja percorrer em Km? ", (vel) => {
  if (parseInt(vel) <= 200) {
    console.log(
      `Se você deseja percorrer ${vel}Km, o preço da passagem será de R$${
        parseInt(vel) * 0.5
      }`
    );
  } else {
    console.log(
      `Se você deseja percorrer ${vel}Km, o preço da passagem será de R$${
        parseInt(vel) * 0.45
      }`
    );
  }
  rl.close();
});
