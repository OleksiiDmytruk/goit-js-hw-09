import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datetimeInputEL = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const deysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', startTimer);

startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.info('Please choose a date in the future');
    } else {
      startBtnEl.disabled = false;
    }
  },
};
const fp = flatpickr(datetimeInputEL, options);

function startTimer() {
  const selectedDate = fp.selectedDates[0];
  startBtnEl.disabled = true;
  datetimeInputEL.disabled = true;
  let ms = 0;

  const timerId = setInterval(() => {
    ms = selectedDate - new Date();
    if (ms >= 0) {
      const date = convertMs(ms);
      const result = addLeadingZero(date);
      deysEl.textContent = result.days;
      hoursEl.textContent = result.hours;
      minutesEl.textContent = result.minutes;
      secondsEl.textContent = result.seconds;
    } else {
      clearInterval(timerId);
      datetimeInputEL.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(date) {
  const days = date.days.toString().padStart(2, '0');
  const hours = date.hours.toString().padStart(2, '0');
  const minutes = date.minutes.toString().padStart(2, '0');
  const seconds = date.seconds.toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}
