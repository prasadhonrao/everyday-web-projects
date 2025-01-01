let button = document.getElementById('calculate');
let dob = document.getElementById('dob');
let result = document.getElementById('result');

function calculateAge(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

button.addEventListener('click', function () {
  // Check if the user has selected a date
  if (!dob.value) {
    result.innerHTML = 'Please select a date';
    return;
  }

  // Check for future date
  let selectedDate = new Date(dob.value);
  let today = new Date();
  if (selectedDate > today) {
    result.innerHTML = 'Birth date cannot be in the future';
    return;
  }

  let age = calculateAge(dob.value);
  result.innerHTML = `You are ${age} years old`;
});
