const displayTimer = document.querySelector('#timer-1');
const displayDays = document.querySelector('span[data-value="days"]');
const displayHours = document.querySelector('span[data-value="hours"]');
const displayMins = document.querySelector('span[data-value="mins"]');
const displaySecs = document.querySelector('span[data-value="secs"]');

class reverseTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
  };

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const remainTime = this.targetDate - currentDate;
      const time = this.getTimeComponents(remainTime);
      this.updateTimer(time);
    }, 1000)
  };

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  };

  updateTimer({ days, hours, mins, secs }) {
    displayDays.textContent = days;
    displayHours.textContent = hours;
    displayMins.textContent = mins;
    displaySecs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new reverseTimer({
  targetDate: new Date("January 1, 2022"),
});

timer.start();