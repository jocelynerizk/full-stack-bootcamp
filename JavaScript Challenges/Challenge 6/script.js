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