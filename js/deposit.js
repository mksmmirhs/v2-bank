document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositAmount = getNumberFromElement('input-deposit');
  const previousDeposit = getNumberFromElement('deposit-balance');
  const newDeposit = depositAmount + previousDeposit;
  setElementToUi('deposit-balance', newDeposit);
  const previousTotal = getNumberFromElement('total-balance');
  const newTotal = depositAmount + previousTotal;
  setElementToUi('total-balance', newTotal);
});
