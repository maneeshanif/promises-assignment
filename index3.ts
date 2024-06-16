// Question # 3
  // Write a function fetchData that returns a Promise which resolves with the string
  // "Data fetched successfully!" after a delay of 1 second.
  import chalk from "chalk";
  import gradient from "gradient-string"
  console.log(chalk.cyanBright.bold("\t\t\t\t\t\t\tQuestion 3"));
  console.log(chalk.yellowBright("----------------------------------------------------------------------------------------------------------------\n"));
  console.log(chalk.blueBright('Given By:'));
  console.log(chalk.hex("49F024").underline("\tMiss Manaheel Jamil"));
  console.log("\n");
  
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gradient.vice("\t\t\t\t\tData Fetched successfully! 👍"));
      }, 1000);
    });
  }
   fetchData().then((data)=>console.log(data))

   // as you see that i am not using reject parameter and also .catch.why??  . 
   //Here is explanation..
  // This is perfectly fine for a promise that is guaranteed to resolve,so in this scenerio their is no need of reject and .catch().
  
  setTimeout(()=>{
    console.log(chalk.magentaBright("----------------------------------------------------------------------------------------------------------------\n"));
 },2100)
  