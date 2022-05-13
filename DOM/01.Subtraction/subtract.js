function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let firstNumAsNumber = Number(firstNumber.value);
    let secondNumber = document.getElementById('secondNumber');
    let secondNumberAsNumber = Number(secondNumber.value);

    let result = firstNumAsNumber - secondNumberAsNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}