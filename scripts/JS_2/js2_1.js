// --------------------------------------------------- 2.Bölüm 1.Kısım

          // ----- 1.ÖRNEK -----

var select = document.querySelector('select');
var para = document.querySelector('p');
select.addEventListener('click',setWeather);

function setWeather() {
  var choice = select.value;
  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

//           // ----- 2.ÖRNEK -----

var checkBox = document.querySelector('input');
var para2 = document.querySelector('#s2');
var shoppingDone = false;

checkBox.addEventListener('change',function() {
  checkBox.disabled = true;
  shoppingDone = true;
  updateAllowance();
});
function updateAllowance() {
  if (shoppingDone === true) {
    var childsAllowance  = 10;
  } else {
    var childsAllowance  = 5;
  }
  para2.textContent = 'Child has earned $' + childsAllowance + ' this week.';
}
updateAllowance();

//           // ----- 3.ÖRNEK -----

var select2 = document.querySelector('#weather2');
var para3 = document.querySelector('#s3');
select2.addEventListener('click',setWeather2);

function setWeather2(){
  var chc = select2.value;
  switch (chc) {
    case 'sunny2':
      para3.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy2':
      para3.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing2':
      para3.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast2':
      para3.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para3.textContent = '';
  }
}

//           // ----- 4.ÖRNEK -----

var select3 = document.querySelector('#theme');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor,textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
select3.onchange = function() {
  if (select3.value === 'black') {
    update('black','white')
  }else {
     update('white','black');
  }
}

//           // ----- 5.ÖRNEK -----

var select = document.querySelector('#month');
var list = document.querySelector('ul');
var h1 = document.querySelector('#monthh1');

select.onchange = function() {
  var choice = select.value;
  var days = 31;
  if(choice === 'February') {
    days = 28;
  } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }
  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for(var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
createCalendar(31,'January');

//           // ----- 6.ÖRNEK -----

var select = document.querySelector('#bckThem');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','darkgray');
      break;
    case 'green':
      update('green','purple');
      break;
  }
}
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
