  // Question # 5
  // Write a function executeSequentially that executes two functions fetchData and
  // processData sequentially using Promises, and logs the results in the order they are
  // called.
  import chalk from "chalk";
  import gradient from "gradient-string"
  console.log(chalk.gray.bold("\t\t\t\t\t\t\tQuestion 5"));
  console.log(gradient.pastel("----------------------------------------------------------------------------------------------------------------\n"));
  console.log(chalk.cyanBright('Given By:'));
  console.log(gradient.fruit("\tMiss Manaheel Jamil"));
  console.log("\n");
  let fetchData = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(gradient.mind("\t\t\t\t\t\tData fetched successfully"))
        // rej("error")
      }, 1000);
    });
  };
  let processData = () => {
    return new Promise(
      (res, rej) =>{
        setTimeout(() =>{
       res(gradient.pastel("\t\t\t\t\t\tData processed successfully"))
      // rej("error")
      }, 2000)
   } );
  }
  async function executeSequentially() {
    let task1;
    try {
      task1 = await fetchData();
      console.log(task1);
    } catch (e) {
      console.log(chalk.redBright(`Error in fetchData: ${e}`));
    }
  
    let task2;
    try {
      task2 = await processData();
      console.log(task2);
    } catch (e) {
      console.log(chalk.redBright(`Error in processData: ${e}`));
    }
  }
  executeSequentially();
  setTimeout(()=>{
    console.log(gradient.fruit("----------------------------------------------------------------------------------------------------------------\n"));
 },3800)
