// Question # 2
  // Write a function simulateTask that simulates a task by logging "Task started",
  // waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
  import chalk from "chalk";
import gradient from "gradient-string"
console.log(chalk.hex("F09624").bold("\t\t\t\t\t\t\tQuestion 2"));
console.log(chalk.blueBright("----------------------------------------------------------------------------------------------------------------\n"));
console.log(chalk.magentaBright('Given By:'));
console.log(chalk.cyanBright.underline("\tMiss Manaheel Jamil"));
console.log("\n");

  function simulateTask() {
    console.log(gradient.atlas("\t\t\t\t\t\t\tTask started.....🙇"));
    setTimeout(() => {
      console.log(gradient.teen("\t\t\t\t\t\t\tTask completed🎉"));
    }, 1000);
  }
  simulateTask()

  setTimeout(()=>{
    console.log(chalk.blueBright("----------------------------------------------------------------------------------------------------------------\n"));
 },2100)
  
  