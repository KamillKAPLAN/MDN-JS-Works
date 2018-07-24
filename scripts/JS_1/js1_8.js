// --------------------------------------------------- 1.Bölüm 8.Kısım

var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
var sequence = [1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];

shopping[0];
shopping[0] = 'tahini';
sequence.length;

for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

var myNewString = myArray.join(',');
console.log(myNewString);

var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger

var myArrays = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');
var newLength = myArray.push('Bristol'); // ekle
myArray.pop();                           // sil

          // ----- 1.ÖRNEK -----
var list = document.querySelector('.output1 ul');
var totalBox = document.querySelector('.output1 p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
 var subArray = products[i].split(':');
 var name = subArray[0];
 console.log(name);
 var price = Number(subArray[1]);
 total += price;
 itemText = name + ' — $' + price;

 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}
totalBox.textContent = 'Total: $' + total.toFixed(2);

          // ----- 2.ÖRNEK -----
var list = document.querySelector('.output2 ul');
var searchInput = document.querySelector('.output2 input');
var searchBtn = document.querySelector('.output2 button');
list.innerHTML = '';
var myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
   myHistory.unshift(searchInput.value); // dizinin başına ekle ve değerini döndür.
   list.innerHTML = '';
   for(var i = 0; i < myHistory.length; i++) {
     itemText = myHistory[i];
     var listItem = document.createElement('li');
     listItem.textContent = itemText;
     list.appendChild(listItem);
   }
   if(myHistory.length >= 5) {
     myHistory.pop();
   }
    searchInput.value = '';
    searchInput.focus();
 }
}
