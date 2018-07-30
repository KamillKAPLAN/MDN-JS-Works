// --------------------------------------------------- 3.Bölüm 1.Kısım

var person = {
  name : ['Kamil', 'KAPLAN'],           // array tanımlıyor
  age : 24,
  gender : 'bekar',
  interests : ['music', 'skiing'],
  bio : function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' +
    this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeeting : function() {
    alert('Hi! I\'m ' + this.name2.first + '.');
  },
  name2 : {                              // nesne tanımlıyor
    first : 'KKAMİL',
    last : 'KKAPLAN'
  }
};

var person1 = {
  name : 'Chris',
  greeeting : function() {
      console.log('Hi! I\'m ' + this.name + '.');
  }
}
// console.log(person.name + ' => ' + person.name[0] + ' ' + person.age + ' ' + person.interests[1] + ' ' + person.bio() + ' ' + person.greeeting() + '.');

// console.log(person['name2']['first'] + ' ' + person.name2.last);

person.name2.last = 'KKKKKK' // or person['name2']['last'] = 'KKKKKK'
// console.log(person.name2);

person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
// console.log(person.eyes);
// console.log(person.farewell());

person.age = 45;
person['name2']['last'] = 'Cratchit';

var myDataName = 'height';
var myDataValue = '1.75';
person[myDataName] = myDataValue;
// console.log('Person height: ' + person.height);

// console.log(person);
