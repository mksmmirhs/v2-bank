document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawalAmount = getNumberFromElement('input-withdraw');
  const previousWithdrawal = getNumberFromElement('withdraw-balance');
  const previousTotal = getNumberFromElement('total-balance');
  if (withdrawalAmount <= previousTotal) {
    setElementToUi('withdraw-balance', withdrawalAmount + previousWithdrawal);
    setElementToUi('total-balance', previousTotal - withdrawalAmount);
  } else {
    alert("you can't withdraw more than balance you have.");
  }
});
