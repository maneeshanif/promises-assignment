// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
import chalk from "chalk";
import gradient from "gradient-string";
console.log(chalk.redBright.bold.italic("\t\t\t\t\t\t\tQuestion 1"));
console.log(chalk.hex("F09624")("----------------------------------------------------------------------------------------------------------------\n"));
console.log(chalk.redBright('Given By:'));
console.log(chalk.yellowBright.underline("\tMiss Manaheel Jamil"));
console.log("\n");
let fetchGreeting = async () => {
    let message = setTimeout(() => {
        // await is not neccessary here bcoz setTimeout also do samething here
        // The async keyword is typically used in front of a function to indicate that it returns a Promise
        console.log(gradient.fruit("\t\t\t\t\t\thello Everyone🙌"));
    }, 2000);
    return message;
};
fetchGreeting();
setTimeout(() => {
    console.log(chalk.hex("F09624")("----------------------------------------------------------------------------------------------------------------\n"));
}, 2100);
