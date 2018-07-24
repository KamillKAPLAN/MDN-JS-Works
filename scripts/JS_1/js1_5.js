var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click',updateBtn);

function updateBtn() {
  if (btn.textContent == 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

var myString = '123';
var myNum = Number(myString);
console.log(typeof myNum);

var myNum = 123;
var myString = myNum.toString();
console.log(typeof myString);
