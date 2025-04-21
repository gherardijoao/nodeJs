const path = require("path");

//path absoluto
console.log(path.resolve(TextDecoderStream.txt));

//formar path
const midFolder = "relatorios";
const fileName = "matheus.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);
console.log(finalPath);
