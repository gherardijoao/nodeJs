const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "qual o seu nome? ",
    },
    {
      name: "idade",
      message: "qual a sua idade? ",
    },
  ])
  .then((answers) => {
    console.log(answers);
    console.log(
      chalk.bgYellow.black(
        `sua idade é ${answers.idade} e o seu nome é ${answers.nome}`
      )
    );
  })
  .catch((err) => console.log(err));
