// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        let success = Math.random() >= 0.5;
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Data fetch Failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
export {};
