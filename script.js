// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ...

    return daysOfWeek[dayIndex];
}

// Display the current day of the week on the webpage
const dayOfWeekElement = document.getElementById("currentdayOfWeek");
const currentDayOfWeek = getCurrentDayOfWeek();
dayOfWeekElement.textContent = `${currentDayOfWeek}.`;

// Function to get the current UTC time
function getCurrentUTCTime() {
    const currentDate = new Date();
    const utcTimeString = currentDate.toISOString(); // Returns a string in ISO format

    return utcTimeString;
}

// Display the current UTC time on the webpage
const utcTimeElement = document.getElementById("utcTime");
const currentUTCTime = getCurrentUTCTime();
utcTimeElement.textContent = `${currentUTCTime}`;

