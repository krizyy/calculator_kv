let display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function calculate(operator) {
  let expression = display.value;
  if (operator === '/') {
    display.value = eval(expression);
  } else {
    display.value = eval(expression.replace('×', '*').replace('−', '-'));
  }
}

function clearResult() {
  display.value = '';
}
