setTimeout(function() {
    console.log("Hello after 5 seconds!");
}, 5000);
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log(timeString);
}

setInterval(updateClock, 1000); // Update every second
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

delayedPromise.then((message) => {
    console.log(message);
});
const initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

const chainedPromise = initialPromise.then((message) => {
    console.log(message);
    return "Chained message!";
});


chainedPromise.then((chainedMessage) => {
    console.log(chainedMessage);
});


