// const summitBtn = document.querySelector('.summit-btn');
// const day = document.getElementById('day');
// const month = document.getElementById('month');
// const year = document.getElementById('year');

const date = new Date();

// // console.log(date);

// const currentDays = date.getTime;

// summitBtn.addEventListener('click', () => {
//     let birthday = day.value;

//     console.log(birthday);
// });
const submitBtn = document.querySelector('.summit-btn');
const yearsDisplay = document.querySelector('.years');
const monthsDisplay = document.querySelector('.months');
const daysDisplay = document.querySelector('.days');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  const inputDay = parseInt(day.value);
  const inputMonth = parseInt(month.value);
  const inputYear = parseInt(year.value);

  // Check if the input date is valid
  if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear) ||
      inputMonth < 1 || inputMonth > 12 || inputDay < 1 || inputDay > 31 ||
      (inputMonth == 2 && inputDay > 29) || // Check for February
      ((inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11) && inputDay > 30)) { // Check for 30-day months
    alert('Invalid date');
    return;
  }

  const inputDate = new Date(inputYear, inputMonth - 1, inputDay);

  // Calculate the difference in years, months, and days
  let yearDiff = date.getFullYear() - inputDate.getFullYear();
  let monthDiff = date.getMonth() - inputDate.getMonth();
  let dayDiff = date.getDate() - inputDate.getDate();

  // Adjust the month difference if the current date is before the input date in the same year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    yearDiff-= 1;
    monthDiff += 12;
  }

  // Calculate the total number of days between the input date and the current date
  const timeDiff = date.getTime() - inputDate.getTime();
  const totalDaysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Calculate the remaining number of months and days based on the total number of days
  const remainingDays = totalDaysDiff - (yearDiff * 365 + Math.floor(yearDiff / 4));
  const remainingMonths = Math.floor(remainingDays / 30);
  const finalDays = remainingDays - remainingMonths * 30;

  // Update the display with the calculated age
  yearsDisplay.textContent = yearDiff;
  monthsDisplay.textContent = remainingMonths;
  daysDisplay.textContent = finalDays;
});

