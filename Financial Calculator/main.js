import inquirer from "inquirer";
import { PVsimple } from "./functions.js";
import { FVsimple } from "./functions.js";
import { FVcompound } from "./functions.js";
import { PVcompound } from "./functions.js";
import { ordinaryAnnuityPV } from "./functions.js";
let register = await inquirer.prompt([
    {
        message: "Select Method",
        name: "Methods",
        type: "list",
        choices: ["Present Vaule (Simple)", "Present Value (Compund)", "Future Value (Simple)", "Future Value (Compound)", "Ordinary Annuity PV",
            "Annuity Due PV"]
    },
    {
        message: "Enter Value",
        name: "Value",
        type: "number"
    },
    {
        message: "Enter Interest Rate (r)",
        type: "number",
        name: "r"
    },
    {
        message: "Enter Years (N)",
        name: "N",
        type: "number"
    }
]);
if (register.Methods === "Present Vaule (Simple)") {
    console.log(PVsimple(register.Value, register.r, register.N));
}
if (register.Methods === "Present Value (Compund)") {
    console.log(PVcompound(register.Value, register.r, register.N));
}
if (register.Methods === "Future Value (Simple)") {
    console.log(FVsimple(register.Value, register.r, register.N));
}
if (register.Methods === "Future Value (Compound)") {
    console.log(FVcompound(register.Value, register.r, register.N));
}
if (register.Methods === "Ordinary Annuity PV") {
    console.log(ordinaryAnnuityPV(register.Value, register.r, register.N));
}
if (register.Methods === "Annuity Due PV") {
    console.log(ordinaryAnnuityPV(register.Value, register.r, register.N));
}
else {
    console.log("ERROR 404");
}
