// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
import chalk from "chalk";
import gradient from "gradient-string";
console.log(chalk.magentaBright.bold("\t\t\t\t\t\t\tQuestion 4"));
console.log(gradient.summer("----------------------------------------------------------------------------------------------------------------\n"));
console.log(chalk.redBright('Given By:'));
console.log(chalk.cyanBright.underline("\tMiss Manaheel Jamil"));
console.log("\n");
function fetchWithError() {
    return new Promise((resolve, reject) => {
        let success = Math.random() >= 0.5;
        setTimeout(() => {
            if (success) {
                resolve(gradient.summer("Data fetched successfully 🕺"));
            }
            else {
                reject(gradient.retro("Data fetch Failed!😭"));
            }
        }, 1000);
    });
}
fetchWithError()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
setTimeout(() => {
    console.log(gradient.retro("----------------------------------------------------------------------------------------------------------------\n"));
}, 2100);
