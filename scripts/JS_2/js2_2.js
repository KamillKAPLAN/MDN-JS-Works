// --------------------------------------------------- 2.Bölüm 20.Kısım

                    // ----- 1.ÖRNEK -----

var cats = ['Bill','Jeff','Pete','Biggles','Jasmin'];
var info = 'My cats ara called1: ';
var para = document.querySelector('p');

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}
para.textContent = info;

                    // ----- 2.ÖRNEK -----

var info2 = 'My cats ara called2: ';
var para2 = document.querySelector('#p2');

for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info2 += 'and ' + cats[i] + '.';
  } else {
    info2 += cats[i] + ', ';
  }
}
para2.textContent = info2;

                    // ----- 3.ÖRNEK -----

var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para3 = document.querySelector('#searchPara');
var input = document.querySelector('#searchInput');
var btn = document.querySelector('button');

btn.addEventListener('click',function(){
  var searchName = input.value;
  var lower = searchName.toLowerCase();
  var upper = searchName.toUpperCase();
  input.value = '';
  input.focus();
  for (var i = 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() == lower || splitContact[0].toUpperCase() == upper) {
      para3.textContent = splitContact[0] + '\' s number is ' + splitContact[1] + '.';
      break;
    } else {
      para3.textContent = 'Contact not found.';
    }
  }
});

                    // ----- 4.ÖRNEK -----

var para4 = document.querySelector('#cntPara');
var input4 = document.querySelector('#cntInput');
var btn4 = document.querySelector('#cntBtn');

btn4.addEventListener('click',function() {
  para4.textContent = 'Output: ';
  var number = input4.value;
  input4.value = '';
  input4.focus();
  for (var i = 0; i < number; i++) {
    var sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para4.textContent += i + ' ';
  }
});

                    // ----- 5.ÖRNEK -----

var str = "";
for (var i = 0; i < 9; i++) {
  str += i + ' ';
}
console.log(str);

var text = "";
for (var i = 0; i < 9; i++) {
  if (i === 3) {
    continue;
  }
  text =text + i + ' ';
}
console.log(text);

var n = 0;
while (n<3) {
  n++;
}
console.log(n);

                    // ----- 6.ÖRNEK -----
var para5 = document.querySelector('#inf');
var inf = '';
var i = 0;
while (i<cats.length) {
  if (i === cats.length - 1) {
    inf += ' and ' + cats[i] + '.';
  } else {
    inf += cats[i] + ', ';
  }
  i++;
}
para5.textContent = inf;
          // -----
var inf = '';
var i = 0;
do {
  if (i === cats.length - 1) {
    inf += 'and ' + cats[i] + '.';
  } else {
    inf += cats[i] + ', ';
  }
  i++;
} while (i < cats.length);
console.log(inf);

                    // ----- 7.ÖRNEK -----

var output = document.querySelector('.output');
output.innerHTML = '';
var i = 10;
while(i >= 0) {
  var para6 = document.createElement('a');
  if(i === 10) {
    para6.textContent = 'Countdown ' + i + ' ';
  } else if(i === 0) {
    para6.textContent = 'Blast off!';
  } else {
    para6.textContent = i + ' ';
  }
  output.appendChild(para6);
  i--;
}

                    // ----- 8.ÖRNEK -----

// var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
// var admitted = document.querySelector('.admitted');
// var refused = document.querySelector('.refused');
//
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '
// var i = 0;
// do {
//   if(people[i] === 'Phil' || people[i] === 'Lola') {
//   refused.textContent += people[i] + ', ';
//   } else {
//     admitted.textContent += people[i] + ', ';
//   }
//   i++;
// } while(i < people.length);
// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

                    // ----- 9.ÖRNEK -----
