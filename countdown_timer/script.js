const newLife = '1 Jan 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


function countdown() {
    const newYearDate = new Date(newLife);
    const currentDate = new Date();

    const total = (newYearDate - currentDate) / 1000;

    const days = Math.floor(total / 3600 / 24);
    const hours = Math.floor(total / 3600) % 24;
    const minutes = Math.floor(total / 60) % 60;
    const seconds = Math.floor(total) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);

