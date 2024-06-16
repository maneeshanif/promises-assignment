// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched successfully!");
        }, 1000);
    });
}
fetchData().then((data) => console.log(data));
export {};
// as you see that i am not using reject parameter and also .catch.why??  . 
//Here is explanation..
// This is perfectly fine for a promise that is guaranteed to resolve,so in this scenerio their is no need of reject and .catch().
