const calculateButton = document.getElementById('calculateButton');
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');

calculateButton.addEventListener('click', () => {
  // Validate input
  if (billAmount.value === '' || tipPercentage.value === '') {
    alert('Please enter a bill amount and tip percentage');
    return;
  }

  // Check if billAmount is not a negative number
  if (billAmount.value < 0) {
    alert('Bill amount cannot be negative');
    return;
  }

  // Check if tipPercentage is not a negative number
  if (tipPercentage.value < 0) {
    alert('Tip percentage cannot be negative');
    return;
  }

  const bill = billAmount.value;
  const tip = tipPercentage.value;
  const tipAmount = bill * (tip / 100);
  const total = parseFloat(bill) + parseFloat(tipAmount);
  document.getElementById('totalAmount').innerHTML = 'Total: ' + total.toFixed(2);
});
