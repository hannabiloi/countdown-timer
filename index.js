const dateForm = document.querySelector("#date-form");
const countdownBox = document.querySelector("#countdown-box");

dateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateInput = document.querySelector("#date-input");
  const timeInput = document.querySelector("#time-input");
  const eventDate = Date.parse(dateInput.value + " " + timeInput.value);

  window.eventCountdown && clearInterval(window.eventCountdown);

  const eventCountdown = setInterval(() => {
    window.eventCountdown = eventCountdown;
    const now = new Date().getTime();

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const d = Math.floor(eventDate / days - now / days);
    const h = Math.floor((eventDate / hours - now / hours) % 24);
    const m = Math.floor((eventDate / minutes - now / minutes) % 60);
    const s = Math.floor((eventDate / seconds - now / seconds) % 60);

    const difference = eventDate - now;
    if (difference > 0) {
      countdownBox.innerHTML = `${d} days ${h} hours ${m} minutes ${s} seconds`;
    } else {
      countdownBox.innerHTML = "<b>Countdown complited</b>";
    }
  }, 1000);
});
