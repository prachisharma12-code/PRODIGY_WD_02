let startTime = 0;
let elapsedTime = 0;
let interval;
let lapCount = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", () => {
    if (!interval) {
        startTime = Date.now();
        interval = setInterval(updateTime, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if (interval) {
        elapsedTime += Date.now() - startTime;
        clearInterval(interval);
        interval = null;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
    lapCount = 0;
});

lapButton.addEventListener("click", () => {
    if (interval) {
        lapCount++;
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount}: ${display.textContent}`;
        laps.appendChild(li);
    }
});
