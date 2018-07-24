// --------------------------------------------------- 1.Bölüm 2.Kısım

var randomNumber = Math.floor(Math.random() * 100) + 1; // 1- 100 arasında rastgele sayı üretir.

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
guessField.focus();

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount == 1) {
    guesses.textContent = "Önceki Tahminler: ";
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess == randomNumber) {
    lastResult.textContent = "Tebrikler! Doğru tahmin ettiniz!";
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ''
    setGameOver();
  } else if (guessCount == 10) {
    lastResult.textContent = '!!! Oyun bitti';
    setGameOver();
  } else {
    lastResult.textContent = 'Yanlış!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent= 'Son tahmin çok küçük!';
    } else {
      lowOrHi.textContent= 'Son tahmin çok büyük!';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Yeni Oyuna Başla';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click',checkGuess);

guessField.value = 'Bir Sayi Giriniz...';
guesses.value   // Parağrafın value değeri alınmaz...
guesses.textContent = 'Where is my paragraph?';
guessField.style.backgroundColor = 'red';
guesses.style.fontSize = '200%';
