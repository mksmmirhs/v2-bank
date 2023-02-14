function getNumberFromElement(elementId) {
  const selectedElement = document.getElementById(elementId);
  let stringFromElement = '';
  if (selectedElement.tagName === 'INPUT') {
    stringFromElement = selectedElement.value;
    selectedElement.value = '';
  } else {
    stringFromElement = selectedElement.innerText;
  }
  const numberFromElement = parseFloat(stringFromElement);
  return numberFromElement;
}
function setElementToUi(elementId, displayAmount) {
  const selectElement = document.getElementById(elementId);
  selectElement.innerText = displayAmount;
}
