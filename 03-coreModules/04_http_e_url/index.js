const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (!name) {
    responseContent +=
      '<h1>Preencha seu nome:</h1> <form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"/></form>';
  } else {
    responseContent += `<h1>Seja bem-vindo, ${name}!</h1>`;
  }

  res.end(responseContent);
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
