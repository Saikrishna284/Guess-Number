const inputBox = document.getElementById('input-box');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const chancesCounter = document.querySelector('.chances-count');
const score = document.querySelector('.score');
const resultOutcome = document.getElementById('result-outcome');
const resultHolder = document.querySelector('.result-holder');
const refreshBtn = document.getElementById('refresh-btn');

let chances = 5;
chancesCounter.innerText = `Chances left : ${chances}`;

score.innerText = `Your Score - 0`;

resultOutcome.innerText = `Your Previous Guess is : `

submitBtn.addEventListener('click',()=>{check()});

refreshBtn.addEventListener('click',()=>{refreshPage()});


const randomValue = randomNumberGenarator();

function randomNumberGenarator(){
  let randomNumber = Math.floor(Math.random() * 101);
  return randomNumber++;
}



function check(){
  let inputValue = inputBox.value;
  inputBox.value = '';
  
  if(chances <=5 && chances >= 1)
  {
    if(inputValue == '')
      {
        message.innerText = `Please Enter a number`;
        message.style.color = 'orange';
      }
      else if(inputValue < 1 || inputValue > 100)
      {
        message.innerText = `Please Enter in range 1 - 100`;
        message.style.color = 'red';
      }
      else if(inputValue == randomValue)
      {
        message.innerText = `You guessed it correct`;
        message.style.color = 'green';
        displayScore(chances);
        previousGuessDisplay(inputValue);
        chances--;
        chancesCounter.innerText = `Chances left : ${chances}`;
        submitBtn.style.display = 'none';
      }
      else if(randomValue - inputValue <= 10 && randomValue - inputValue >= 1)
      {
        message.innerText = `Your number is closer`;
        message.style.color = 'green';
        chances--;
        chancesCounter.innerText = `Chances left : ${chances}`;
        previousGuessDisplay(inputValue);
      }
      else if(inputValue - randomValue <= 10 && inputValue - randomValue >= 1)
      {
          message.innerText = `Your number is closer`;
          message.style.color = 'green';
          chances--;
          chancesCounter.innerText = `Chances left : ${chances}`;
          previousGuessDisplay(inputValue);
      }
    
      else if(inputValue > randomValue)
      {
        message.innerText = `Your number is greater`;
        message.style.color = 'black';
        chances--;
        chancesCounter.innerText = `Chances left : ${chances}`;
        previousGuessDisplay(inputValue);
      }
      else if(inputValue < randomValue)
      {
        message.innerText = `Your number is smaller`;
        message.style.color = 'black';
        chances--;
        chancesCounter.innerText = `Chances left : ${chances}`;
        previousGuessDisplay(inputValue);
      }
      
 }


}
function displayScore(chances)
{
  if(chances == 5)
  {
    score.innerText = `Your Score - 100`;
  }
  if(chances == 4)
  {
      score.innerText = `Your Score - 80`;
  }
  if(chances == 3)
  {
      score.innerText = `Your Score - 60`;
  }
  if(chances == 2)
  {
      score.innerText = `Your Score - 40`;
  }
  if(chances == 1)
  {
      score.innerText = `Your Score - 20`;
  }

}
function previousGuessDisplay(inputValue)
{
  if(inputValue == randomValue)
  {
    resultHolder.style.backgroundColor = 'green';
    resultOutcome.innerText = `Congratulations You Won !`
  }
  else if(chances == 0)
  {
    chancesCounter.innerText = `Chances left : ${chances}`;
    submitBtn.style.display = 'none';
    resultHolder.style.backgroundColor = 'red';
    resultOutcome.innerText = `You Lost Try again !`
    message.innerText = `Chances over ! The number is ${randomValue}`;
    message.style.color = 'red';
  }
  else
  {
    resultOutcome.innerText += ` ${inputValue}`; 
  }

}

function refreshPage()
{
  window.location.reload();
}










