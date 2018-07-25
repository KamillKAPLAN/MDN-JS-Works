// --------------------------------------------------- 2.Bölüm 3.Kısım

                    // ----- 1.ÖRNEK -----
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);

var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
console.log(myArray);
console.log(madeAString);

var myNumber = Math.floor(Math.random() *2);

                    // ----- 2.ÖRNEK --- Fonk. kullanımının 2 formatı var. ---
          // function declaration
function myFunction() {
  console.log('hello function declaration');
}
myFunction();
          // function expression
var myGreeting = function() {
  console.log('hello function expression');
}
myGreeting();
        // -----
var myButton = document.querySelector('button');

myButton.onclick = function() {
  console.log('hello-Click');
}

                    // ----- 3.ÖRNEK -----
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5));

// --------------------------------------------------- 2.Bölüm 4.Kısım

                    // ----- 1.ÖRNEK -----
var dspBtn = document.querySelector('#dsp');

function displayMessage() {
  var html = document.querySelector('html');

  var panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  var msg = document.createElement('p');
  msg.textContent = 'This is a message box';
  panel.appendChild(msg);

  var closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel); // or  html.removeChild(panel);
  }
}
dspBtn.addEventListener('click',displayMessage); // or dspBtn.onclick = displayMessage;

                    // ----- 2.ÖRNEK -----
var dspbtn2 = document.querySelector('#dsp2');
dspbtn2.onclick = function() {
  displayMessage2('Brian: Hi there, how are you today?','chat');
};

function displayMessage2(msgText,msgType) {
  var html2 = document.querySelector('html');

  var panel2 = document.createElement('div');
  panel2.setAttribute('class','msgBoxa');
  html2.appendChild(panel2);

  var msg2 = document.createElement('p');
  msg2.textContent = msgText;
  panel2.appendChild(msg2);

  var closeBtn2 = document.createElement('button');
  closeBtn2.textContent = 'x';
  panel2.appendChild(closeBtn2);

  closeBtn2.onclick = function() {
    panel2.parentNode.removeChild(panel2);
  }
  if(msgType === 'warning') {
    msg2.style.backgroundImage = 'url(https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/warning.png)';
    panel2.style.backgroundColor = 'red';
  } else if(msgType === 'chat') {
    msg2.style.backgroundImage = 'url(https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/chat.png)';
    panel2.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
}

// --------------------------------------------------- 2.Bölüm 5.Kısım

                    // ----- 1.ÖRNEK -----
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
console.log(getRectArea(3, 4));
console.log(getRectArea(-3, 4));

                    // ----- 2.ÖRNEK -----
function counter() {
  for (var count = 1; ; count++) {  // infinite loop
    console.log(count + 'A'); // until 5
    if (count === 5) {
      return;
    }
    console.log(count + 'B');  // until 4
  }
  console.log(count + 'C');  // never appears
}
counter()

                    // ----- 3.ÖRNEK -----
var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

function squared(num) {
  return num * num;
}
function cubed(num) {
  return num * num * num;
}
function factorial(num) {
  var x = num;
  while(x > 1) {
    num *=x-1;
    x--;
  }
  return num;
}

input.onchange = function() {
  var num = input.value;
  if(isNaN(num)) {
    para.textContent = 'Bir sayı girmelisin!';
  }else {
    para.textContent = num + ' nin karesi ' + squared(num) + '. ' + num + ' nin küpü ' + cubed(num) + '. ' + num + ' nin faktoriyeli ' + factorial(num) + '.';
  }
}

// --------------------------------------------------- 2.Bölüm 6.Kısım

                    // ----- 1.ÖRNEK -----
var btn = document.querySelector('#chnc');

function random(number) {
  return Math.floor(Math.random() * (number-1));
}
btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

                    // ----- 2.ÖRNEK -----
function numbersOnly(oToCheckField, oKeyEvent) {
  return oKeyEvent.charCode === 0 || /\d/.test(String.fromCharCode(oKeyEvent.charCode));
}

                    // ----- 3.ÖRNEK -----
var msnBtn = document.querySelector('#msnBtn');
var msn = document.querySelector('body');

msnBtn.onmouseover = function() {
  msn.style.backgroundColor = 'red';
}
msnBtn.onmouseout = function() {
  msn.style.backgroundColor = 'yellow';
}

                    // ----- 4.ÖRNEK -----
var bton = document.querySelector('#chncBtn');

function bgChange(e) {
  var rndCol2 = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol2;
  console.log(e);
}
bton.addEventListener('click',bgChange);

                    // ----- 5.ÖRNEK -----
for (var i = 1; i <= 16; i++) {
  var myDiv = document.createElement('div');
  myDiv.setAttribute('class','dv');
  document.body.appendChild(myDiv);
}

function bgChangee() {
  var rndColl = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndColl;
}

var divs = document.querySelectorAll('div');
for(var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
  e.target.style.backgroundColor = bgChangee();
  }
}

                    // ----- 6.ÖRNEK -----
var form = document.querySelector('#frma');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para2 = document.querySelector('#frm');

form.onsubmit = function(e) {
  if(fname.value === '' || lname.value === '') {
    e.preventDefault();
    para2.textContent = 'You need to fill in both names!'
  }
}
