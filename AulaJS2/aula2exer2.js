const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um ano: ", (ano) => {
  console.log(`O ano selecionado foi ${ano}`);
  if (parseInt(ano) % 400 == 0) {
    console.log(`O ano é bissexto.`);
  } else if (parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) {
    console.log(`O ano é bissexto.`);
  } else {
    console.log(`O ano não é bissexto.`);
  }
  rl.close();
});
