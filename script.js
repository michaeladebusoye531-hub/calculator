// CALCULATOR SCRIPT    

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function appendOperator(input) {
    appendToDisplay(input);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {   
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
  function updateButtonState(){
   const Lastchar = display.value.slice(-1);
   const operators = ['+', '-', '*', '/'];.includes(Lastchar);
   if (operators.includes(Lastchar)) {
       display.value = display.value.slice(0, -1); + input;     
   } else {
       display.value += input;  
   }
  }