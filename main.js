// Define time units in milliseconds
const SECOND_MS = 1000;
const MINUTE_MS = SECOND_MS * 60;
const HOUR_MS = MINUTE_MS * 60;
const DAY_MS = HOUR_MS * 24;

// Retrieve the countdown value from local storage
let countDown = localStorage.getItem("countvalue");

// If the countdown value is not available in local storage, set it to a future date
if (!countDown) {
  countDown = new Date().getTime() + 10 * DAY_MS;
  localStorage.setItem("countvalue", countDown);
}

// Update the countdown every second
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countDown - now;

  // Update the countdown display
  document.getElementById("days").innerText = Math.floor(distance / DAY_MS);
  document.getElementById("display_days").innerText = Math.floor(distance / DAY_MS);
  document.getElementById("hours").innerText = Math.floor((distance % DAY_MS) / HOUR_MS);
  document.getElementById("minutes").innerText = Math.floor((distance % HOUR_MS) / MINUTE_MS);
  document.getElementById("seconds").innerText = Math.floor((distance % MINUTE_MS) / SECOND_MS);

  // Restart countdown if it has ended
  if (distance < 0) {
    countDown = new Date().getTime() + 10 * DAY_MS;
    localStorage.setItem("countvalue", countDown);
  }
};

// Call the update function initially and then every second
updateCountdown();
setInterval(updateCountdown, 1000);