// --------------------------------------------------- 3.Bölüm 1.Kısım

                    // ----- 1.ÖRNEK -----
var person = {
  name : ['Kamil', 'KAPLAN'],
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
  name2 : {
    first : 'KKAMİL',
    last : 'KKAPLAN'
  }
};

// console.log(person.name + ' => ' + person.name[0] + ' ' + person.age + ' ' +
// person.interests[1] + ' ' + person.bio() + ' ' + person.greeeting() + '.');

// console.log(person.name2.first + ' ' + person.name2.last);

person['name2']['last'] = 'KKKKK';
// console.log(person.name2);

person['eyes'] = 'hazel';
// console.log(person.eyes);

person.farewell = function() { alert("Bye everybody!"); }
// console.log(person.farewell());

// --------------------------------------------------- 3.Bölüm 2.Kısım

                    // ----- 1.ÖRNEK -----
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
