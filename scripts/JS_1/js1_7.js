// --------------------------------------------------- 1.Bölüm 7.Kısım

var browserType = 'Google Chrome';
console.log(browserType.length);

console.log(browserType[browserType.length-1]);

console.log(browserType.indexOf('Chrome'));

console.log(browserType.slice(0,3));

var radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

console.log(browserType.replace('Goo','goo'));

          // ----- 1.ÖRNEK -----
var list = document.querySelector('.output1 ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!', 'Merry Christmas my love', 'A happy Christmas to all the family', 'You\'re all I want for Christmas', 'Get well soon'];
for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

          // ----- 2.ÖRNEK -----
var list = document.querySelector('.output2 ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lower = input.toLowerCase();
  var firstLetter = lower.slice(0,1);
  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  var result = capitalized;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

          // ----- 3.ÖRNEK -----
var list = document.querySelector('.output3 ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
 'GNF576746573fhdg4737dh4;Greenfield',
 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
 'SYB4f65hf75f736463;Stalybridge',
 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(var i = 0; i < stations.length; i++) {
 var input = stations[i];
 var code = input.slice(0,3);
 var semiC = input.indexOf(';');
 var name = input.slice(semiC + 1);
 var result = code + ': ' + name;
 var listItem = document.createElement('li');
 listItem.textContent = result;
 list.appendChild(listItem);
}
