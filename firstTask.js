// Get the current date and time
const today = new Date();
const currentDayOfWeek = today.toLocaleDateString(undefined, { weekday: 'long' });
const currentUTCTime = today.toISOString();

// Set the content of the elements
document.getElementById("currentDayText").textContent = currentDayOfWeek;
document.getElementById("currentTimeText").textContent = currentUTCTime;
