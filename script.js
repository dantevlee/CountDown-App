const year = document.querySelector(".newYear");
const date = new Date();
const upcomingNewYear = date.getFullYear() + 1;
year.textContent = `COUNTDOWN TO ${upcomingNewYear}`;

function displayCountDown() {
  const daysElement = document.getElementById("day");
  const hoursElement = document.getElementById("hour");
  const minutesElement = document.getElementById("minute");
  const secondsElement = document.getElementById("second");
  const newYearTime = new Date(`${upcomingNewYear} 00:00:00`).getTime();
  const now = new Date().getTime();

  const timeRemaining = newYearTime - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor(timeRemaining / days);
  const h = Math.floor((timeRemaining % days) / hours) - 1;
  const m = Math.floor((timeRemaining % hours) / minutes);
  const s = Math.floor((timeRemaining % minutes) / seconds);
  daysElement.textContent = addLeadingZero(d);
  hoursElement.textContent = addLeadingZero(h);
  minutesElement.textContent = addLeadingZero(m);
  secondsElement.textContent = addLeadingZero(s);
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number; 
}

displayCountDown()
setInterval(displayCountDown, 1000);
