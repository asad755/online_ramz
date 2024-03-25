import inquirer from "inquirer";

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "write your guess:"
  }

])
console.log(answers.userGuess)