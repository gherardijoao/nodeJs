// modulos externos

const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos

const fs = require("fs");

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "o que você deseja fazer?",
        choices: [
          "criar conta",
          "consultar saldo",
          "depositar",
          "sacar",
          "sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "criar conta") {
        createAccount();
      }
    })
    .catch((err) => console.log(err));
}

//create account

function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));
}

operation();
