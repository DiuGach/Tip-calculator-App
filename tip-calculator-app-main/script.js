const billInput = document.getElementById('bill');
const numOfPeople = document.getElementById('num-of-people');
const totalAmount = document.querySelector('.total-amount');
const inputLarges = document.querySelectorAll('.left-side');
const inputBillReset = document.querySelector('.input-large');
const inputNumPeopleReset = document.querySelector('#num-of-people');
const resetBtn = document.querySelector('.tip-btn');
const selectTipInput = document.querySelectorAll('.select-tip-input');
const custom = document.querySelector('.select-tip-custom');
const tipValue = document.querySelector('.tip-amount-value');
const errorLabel = document.querySelector('.error-label');

// Handling default user input (%)
selectTipInput.forEach(selectTip =>
  selectTip.addEventListener('click', function (e) {
    const tip = e.target.dataset.value;

    const billInputValue = Number(billInput.value);
    const numOfPeopleValue = Number(numOfPeople.value);
    const total = billInputValue / numOfPeopleValue;

    const tipAmount = total * (tip / 100);
    if (billInputValue && numOfPeopleValue) {
      totalAmount.textContent = `$${Math.floor(total - tipAmount)}`;
      tipValue.textContent = `$${tipAmount.toFixed(2)}`;
    } else if (!numOfPeopleValue) {
      errorLabel.textContent = 'Can not be 0 🚫';
      errorLabel.style.color = 'red';
      numOfPeople.style.border = '1px solid red';
    }
  })
);

// Handling custom user input (%)
custom.addEventListener('change', function (e) {
  const customInput = Number(e.target.value);
  const billInputValue = Number(billInput.value);
  const numOfPeopleValue = Number(numOfPeople.value);
  const total = billInputValue / numOfPeopleValue;
  const tipAmount = total * (customInput / 100);
  tipValue.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmount.textContent = total - tipAmount.toFixed(2);
});

// Reset
resetBtn.addEventListener('click', function () {
  console.log('clicked');
  inputBillReset.value = '';
  inputNumPeopleReset.value = '';
  tipValue.textContent = '0.00';
  totalAmount.textContent = '0.00';

  errorLabel.textContent = 'Num of people';
  errorLabel.style.color = 'black';
  numOfPeople.style.border = 'none';
});
