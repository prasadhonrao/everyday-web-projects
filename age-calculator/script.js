let button = document.getElementById('calculate');
let dob = document.getElementById('dob');
let result = document.getElementById('result');

// Function to calculate age
function calculateAge(dob) {
  let today = new Date();
  let birthDate = new Date(dob);

  // Special case for today's date (newborn)
  if (today.toDateString() === birthDate.toDateString()) {
    return `You are newborn!`;
  }

  let year = today.getFullYear() - birthDate.getFullYear(); // Renamed from age
  let month = today.getMonth() - birthDate.getMonth();
  let day = today.getDate() - birthDate.getDate();

  // Adjust if month or day is negative
  if (month < 0 || (month === 0 && day < 0)) {
    year--; // Decrease year by 1 since the birthday hasn't happened yet this year
    month += 12; // Add 12 months to make the month difference positive
  }
  if (day < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Get the last day of the previous month
    day += lastMonth.getDate(); // Add the number of days in the last month
    month--; // Decrease the month by 1, as we borrowed days from the previous month
  }

  // Return age in a simplified format
  if (year === 0 && month === 0 && day > 0) return `You are ${day} day${day > 1 ? 's' : ''} old`;
  if (year === 0 && month > 0)
    return `You are ${month} month${month > 1 ? 's' : ''} and ${day} day${day > 1 ? 's' : ''} old`;
  if (year < 0) return `You are ${month} month${month > 1 ? 's' : ''} and ${day} day${day > 1 ? 's' : ''} old`;

  return `You are ${year} year${year > 1 ? 's' : ''}, ${month} month${month > 1 ? 's' : ''} and ${day} day${
    day > 1 ? 's' : ''
  } old`;
}

// Event listener to handle age calculation when button is clicked
button.addEventListener('click', function () {
  if (!dob.value) {
    result.innerHTML = 'Please select a date';
    return;
  }

  let selectedDate = new Date(dob.value);
  if (selectedDate > new Date()) {
    result.innerHTML = 'Birth date cannot be in the future';
    return;
  }

  result.innerHTML = calculateAge(dob.value); // Display age result
});
