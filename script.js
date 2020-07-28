// Click in generateButton
const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const realPin = document.getElementById('real-pin');
    realPin.value = randomNumber;
})

// Function to find out input value from input-pin id. 
function takeInputPinValue() {
    let inputPin = document.getElementById('input-pin').value;
    let inputPinValue;
    if (inputPin == '') {
        inputPinValue = 0;
    }
    else {
        inputPinValue = parseInt(inputPin);
    }
    return inputPinValue;
}

// Function to attach a digit beside another. (3+4 = 34)
function attachDigit(numberId) {
    const numberButton1 = document.getElementById(numberId);
    numberButton1.addEventListener('click', function () {
        let digit = parseInt(numberButton1.innerText);
        let inputPinValue = takeInputPinValue();
        inputPinValue = (inputPinValue * 10) + digit;
        document.getElementById('input-pin').value = inputPinValue;
    })
}

// Calling attachDigit function for all number button
attachDigit('number-button-1');
attachDigit('number-button-2');
attachDigit('number-button-3');
attachDigit('number-button-4');
attachDigit('number-button-5');
attachDigit('number-button-6');
attachDigit('number-button-7');
attachDigit('number-button-8');
attachDigit('number-button-9');
attachDigit('number-button-0');

// Click in backspaceButton
const backspaceButton = document.getElementById('backspace-button');
backspaceButton.addEventListener('click', function () {
    let inputPin = document.getElementById('input-pin').value;
    let inputPinValue = takeInputPinValue();
    inputPinValue = parseInt(inputPinValue / 10);
    if (inputPinValue == 0) {
        document.getElementById('input-pin').value = '';
    }
    else {
        document.getElementById('input-pin').value = inputPinValue;
    }
})

// Click in AC button
const acButton = document.getElementById('ac-button');
acButton.addEventListener('click', function () {
    document.getElementById('input-pin').value = '';
})

// To count the number of try
let tryCount = 3;

// To submit the pin and check wether the pin is matched or not with randomNumber. 
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    if (tryCount > 0) {
        let randomNumber = parseInt(document.getElementById('real-pin').value);
        let inputPin = document.getElementById('input-pin').value;
        let inputPinValue = takeInputPinValue();
        if (randomNumber == inputPinValue) {
            document.getElementById('correct-pin').style.display = 'block';
            document.getElementById('wrong-pin').style.display = 'none';
        }
        else {
            document.getElementById('wrong-pin').style.display = 'block';
            document.getElementById('correct-pin').style.display = 'none';
            tryCount--;
            document.getElementById('try-text').innerText = tryCount + " try left";
        }
    }
    else{
        document.getElementById('try-full').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
        document.getElementById('correct-pin').style.display = 'none';
    }
})


