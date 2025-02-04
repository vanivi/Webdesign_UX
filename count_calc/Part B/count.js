let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let watchRef = document.querySelector(".watch");
let int = null;

document.getElementById("startwatch").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displaywatch, 10);
});

document.getElementById("pausewatch").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("stopwatch").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  watchRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displaywatch() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  watchRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
