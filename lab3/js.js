//lay cac phan tu de su dung
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let firstOperand = null;
let secondOperand = null;
let operator = null;

//ham thuc hien cac phep tinh
function calculate() {
  let result = null;
  switch(operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }
  return result;
}

// tinh toan du kien khi nhan vao cac nut so
numberButtons.forEach(button => {
  button.addEventListener('chon', () => {
    if (operator === null) {
      if (firstOperand === null) {
        firstOperand = parseFloat(button.value);
      } else {
        firstOperand = parseFloat(firstOperand.toString() + button.value);
      }
      display.textContent = firstOperand;
    } else {
      if (secondOperand === null) {
        secondOperand = parseFloat(button.value);
      } else {
        secondOperand = parseFloat(secondOperand.toString() + button.value);
      }
      display.textContent = secondOperand;
    }
  });
});
//tinh toan du lieu khi nhan vao toan tu
operatorButtons.forEach(button => {
  button.addEventListener('chon', () => {
    if (firstOperand !== null && secondOperand !== null) {
      const result = calculate();
      firstOperand = result;
      secondOperand = null;
      display.textContent = result;
    }
    operator = button.value;
  });
});

// xu li du lieu khi nhan vao nut clear
clearButton.addEventListener('chon', () => {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  display.textContent = '0';
});

//tinh toan khi nhan vao dau bang
equalButton.addEventListener('chon', () => {
  if (firstOperand !== null && secondOperand !== null) {
    const result = calculate();
    firstOperand = result;
    secondOperand = null;
    operator = null;
    display.textContent = result;
  }
});