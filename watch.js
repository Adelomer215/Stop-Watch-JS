const seconds = document.getElementById("seconds");
const mlSeconds = document.getElementById("ml-seconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let timerInterval;
let mSec = 0;
let sec = 0;

const timer = () => {
  mSec++;
  if (mSec < 9) {
    mlSeconds.innerText = `0${mSec}`;
  }
  if (mSec > 9) {
    mlSeconds.innerText = mSec;
  }
  if (mSec > 99) {
    sec++;
    seconds.innerText = `0${sec}`;
    mSec = 0;
    mlSeconds.innerText = 0;
  }
  if (sec > 9) {
    seconds.innerText = sec;
  }
};
start.addEventListener("click", () => {
  timerInterval = setInterval(timer, 10);
});
stop.addEventListener("click", () => {
  clearInterval(timerInterval);
});
reset.addEventListener("click", () => {
  clearInterval(timerInterval);
  sec = "00";
  mSec = "00";
  mlSeconds.innerText = mSec;
  seconds.innerText = sec;
});
