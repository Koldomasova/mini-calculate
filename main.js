const calculate = document.querySelector('.calculate');
const input = document.querySelector('.input');
const check = document.querySelector('.check');
const answer = document.querySelector('.answer');

const getRandomNumber = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);
calculate.textContent = firstNumber + "x"+ secondNumber;

check.addEventListener('click', () =>{
   if(firstNumber * secondNumber === +input.value ){
    answer.textContent = "Верно";
    firstNumber = getRandomNumber(1, 9);
     secondNumber = getRandomNumber(1, 9);
     calculate.textContent = firstNumber + "x"+ secondNumber;
     answer.style.color = '#286b29';
   } else{
    answer.textContent = "Не верно";
     answer.style.color = '#bc0000';
   }
  input.value = "";
  input.focus();
} )
