// --------------------------------------------------- 3.Bölüm 2.Kısım
          // Yapıcılarla sınıflar oluşturmayı ve bunlardan JavaScript'de nesne örnekleri oluşturmayı deneyelim.

                    // ----- 1.ÖRNEK -----
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeeting = function() {
    // console.log('Hi I\'m ' + this.name + '.');
  };
  return obj;
}

var salva = createNewPerson('Salva');
// salva.greeeting();

                    // ----- 2.ÖRNEK -----  ' constructor(YAPICI) Fonksiyon '
function Person2(first,last,age,gender,interests) {
  this.name = {
    'first' : first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    // console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    // console.log('Hi! I\'m ' + this.name.first + '.');
  };
}

var person3 = new Person2('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
// console.log(person3);
person3.bio();

                    // ----- 3.ÖRNEK -----
function Person3(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {

    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    var pronoun;

    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      pronoun = 'He likes ';
    } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      pronoun = 'She likes ';
    } else {
      pronoun = 'They like ';
    }
    string += pronoun;
    if(this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if(this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      for(var i = 0; i < this.interests.length; i++) {
        if(i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }
    // console.log(string);
  };
  this.greeting = function() {
    // console.log('Hi! I\'m ' + this.name.first + '.');
  };
};

var personn = new Person3('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
personn.bio();
