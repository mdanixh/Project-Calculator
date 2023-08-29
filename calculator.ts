import inquirer from "inquirer"
import {sum} from "./function.js"
import {sub} from "./function.js"
import {mul} from "./function.js"
import {div} from "./function.js"

import chalk from "chalk";
const isNumber = (value:number) =>{
    if (isNaN(value)) {
        return "Please enter a valid number";
    }
    return true;
};

let question = await inquirer.prompt([
    {
        message: "Enter 1st integer",
        type: "number",
        name: "num1",
        validate: isNumber
    },
    {
        message: "Select Operation:",
        name: "operator",
        type: "list",
        choices: ["Add", "Sub", "Mul", "Div"]
    },
    {
        message: "Enter 2nd integer",
        type: "number",
        name: "num2",
        validate: isNumber
    }
])

let num1: number = question.num1
let num2: number = question.num2

if (question.operator === "Add") {
    console.log(chalk.yellow(div(num1, num2)))
    }
    if (question.operator === "Sub") {
        console.log(chalk.green(div(num1, num2)))
    }
    if (question.operator === "Mul") {
        console.log(chalk.red(mul(num1, num2)))
    }
    if (question.operator === "Div") {
        console.log(chalk.blue(div(num1, num2)))
    }
    else {"error 404"}



