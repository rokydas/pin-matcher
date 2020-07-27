const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const realPin = document.getElementById('real-pin');
    realPin.value = randomNumber;
})

function attachDigit(numberId) {
    const numberButton1 = document.getElementById(numberId);
    numberButton1.addEventListener('click', function () {
        let digit = parseInt(numberButton1.innerText);
        let inputPin = document.getElementById('input-pin').value;
        let inputPinValue;
        if (inputPin == '') {
            inputPinValue = 0;
        }
        else {
            inputPinValue = parseInt(inputPin);
        }
        inputPinValue = (inputPinValue * 10) + digit;
        document.getElementById('input-pin').value = inputPinValue;
    })
}

// const numberButton1 = document.getElementById('number-button-1');
// numberButton1.addEventListener('click', function(){
//     console.log(numberButton1.innerText);
// })

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

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.addEventListener('click', function () {
    let inputPin = document.getElementById('input-pin').value;
    let inputPinValue;
    if (inputPin == '') {
        inputPinValue = 0;
    }
    else {
        inputPinValue = parseInt(inputPin);
    }
    inputPinValue = parseInt(inputPinValue / 10);
    if(inputPinValue == 0){
        document.getElementById('input-pin').value = '';
    }
    else{
        document.getElementById('input-pin').value = inputPinValue;
    }
})

const acButton = document.getElementById('ac-button');
acButton.addEventListener('click', function(){
    document.getElementById('input-pin').value = '';
})

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(){
    let randomNumber = parseInt(document.getElementById('real-pin').value);
    let inputPin = document.getElementById('input-pin').value;
    let inputPinValue;
    if (inputPin == '') {
        inputPinValue = 0;
    }
    else {
        inputPinValue = parseInt(inputPin);
    }
    if(randomNumber == inputPinValue){
        document.getElementById('correct-pin').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
    }
    else{
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('correct-pin').style.display = 'none';
    }
})
