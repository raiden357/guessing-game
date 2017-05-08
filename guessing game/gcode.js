 var randomNumber = Math.floor(Math.random() * 100) + 1; //sets random number between 1-100

    // stores the results of the guesses, lastResult, lowOrHi, guessSubmit and guessField classes.

    var guesses = document.querySelector('.guesses'); 
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    var guessCount = 1;
    var resetButton;
    guessField.focus(); // focuses mouse cursor on the guess input field


    // checks if there has been a previous guess, then displays it

    function checkGuess() {
      var userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
      }

      guesses.textContent += userGuess + ' '; 

      // if the correct number is guessed,a message is displayed and the game is reset

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();  
      } 

      // if all 10 guesses are wrong, a message is displayed and the game ends

      else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver(); 
      } 

      //checks whether guess is too low or too high

      else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent='Last guess was too low!' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }

      guessCount++; // adds 1 to guess count variable after each guess
      guessField.value = ''; //clears input field after each guess
    }

    guessSubmit.addEventListener('click', checkGuess); //checkGuess function is executed when submit button is clicked

    // disables input field and submit button.Prints a message and creates a reset button

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    // resets all fields and settings to their default value

    function resetGame() {
      guessCount = 1;
      var resetParas = document.querySelectorAll('.resultParas p');
      for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1; 
    }