#!/usr/bin/env node
import inquirer from "inquirer";
//1) computer wiil generate a rendom number done
//2) user input guessing number done
//3) copmer user input with computer generated number  and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber );
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! You Write Right Number.");
}
else {
    console.log("You Guess Rong Number.");
}
