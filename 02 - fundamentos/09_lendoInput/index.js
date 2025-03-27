const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("qual a sua linguagem preferida? ", (language) => {
  if (language === "Python") {
    console.log("ta de sacanagem?");
  } else {
    console.log(`a minha linguagem preferida é: ${language}`);
  }
  readline.close();
});
