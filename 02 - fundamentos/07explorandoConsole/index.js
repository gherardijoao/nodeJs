const x = 10;
const y = "joao";
const z = [1, 102, 12];

console.log(x, y, z);

//contagem de impressões
console.count(`o valor de x é: ${x}, contagem`);

// variavel entre string
console.log("o nome é %s, ele é programador", y);

//limpar console

setTimeout(() => {
  console.clear;
}, 2000);
