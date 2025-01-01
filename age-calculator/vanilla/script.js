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

  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  let day = today.getDate() - birthDate.getDate();

  // Adjust if month or day is negative
  if (month < 0 || (month === 0 && day < 0)) {
    age--;
    month += 12;
  }
  if (day < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    day += lastMonth.getDate();
    month--;
  }

  // Return age in a simplified format
  if (age === 0 && month === 0 && day > 0) return `You are ${day} day${day > 1 ? 's' : ''} old`;
  if (age === 0 && month > 0)
    return `You are ${month} month${month > 1 ? 's' : ''} and ${day} day${day > 1 ? 's' : ''} old`;
  if (age < 0) return `You are ${month} month${month > 1 ? 's' : ''} and ${day} day${day > 1 ? 's' : ''} old`;

  return `You are ${age} year${age > 1 ? 's' : ''}, ${month} month${month > 1 ? 's' : ''} and ${day} day${
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
