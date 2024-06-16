  // Question # 5
  // Write a function executeSequentially that executes two functions fetchData and
  // processData sequentially using Promises, and logs the results in the order they are
  // called.
  let fetchData = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Data has been fetched")
        // rej("error")
      }, 1000);
    });
  };
  let processData = () => {
    return new Promise(
      (res, rej) =>{
        setTimeout(() =>{
       res("Data has been processed")
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
      console.log(`Error in fetchData: ${e}`);
    }
  
    let task2;
    try {
      task2 = await processData();
      console.log(task2);
    } catch (e) {
      console.log(`Error in processData: ${e}`);
    }
  }
  executeSequentially();