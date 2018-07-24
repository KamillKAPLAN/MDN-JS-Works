// --------------------------------------------------- 1.Bölüm 4.Kısım

var button = document.querySelector('button');

button.onclick = function() {
  var name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

var myAge = 17;                                               // sayılar

var dolphinGoodbye = 'So long and thanks for all the fish';   // stringler

var iAmAlive = true;                                          // booleans

var test = 6 < 3;

var myNameArray = ['Chris', 'Bob', 'Jim'];                    //diziler
var myNumberArray = [10,15,40];

var dog = { name : 'Spot', breed : 'Dalmatian' };             // nesneler
dog.name

var myNumber = '500'; // oops, this is still a string
console.log(typeof myNumber);
myNumber = 500; // much better — now this is a number
console.log(typeof myNumber);
