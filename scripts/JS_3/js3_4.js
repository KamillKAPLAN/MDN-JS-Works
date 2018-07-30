// --------------------------------------------------- 3.Bölüm 4.Kısım
                    // ----- 1.ÖRNEK -----
var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');
btn.onclick = function() {
  var code = input.value;
  if (isNaN(code)) {
    para.style.color = 'red';
    para.textContent = 'Sayı girin...';
  } else {
    para.textContent = (code);
  }
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function() {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  // define a variable that will contain the pronoun part of
  // the second sentence
  var pronoun;
  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }
  // add the pronoun string on to the end of the main string
  string += pronoun;
  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(var i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  // finally, with the string built, we alert() it
  alert(string);
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}

var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

                    // ----- 2.ÖRNEK -----
// Teacher() yapıcı metodu oluşturduk.
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests, subject);
  this.subject = subject;
}
/* - call() bu işlev, temelde başka bir yerde tanımlanmış bir işlevi çağırmanıza izin verir, ancak geçerli
  bağlamda. İlk parametre this, işlevi çalıştırırken kullanmak istediğiniz değeri belirtir ve diğer parametreler,
  çağrıldığında işleve iletilmesi gereken parametrelerdir.
   - Kurucunun, devraldığı kurucu ile Teacher()aynı parametreleri almasını istiyoruz Person(), bu yüzden hepsini,
   call() çağrıda parametreler olarak belirtiyoruz. Kurucunun içindeki son satır, sadece subject öğretmenlerin
   sahip olacağı yeni mülkü, hangi genel insanın sahip olamayacağını tanımlar.
*/
                    // ----- 3.ÖRNEK -----
// Parametresiz bir kurucudan devralınması
/* - Devralmakta olduğunuz yapıcı, özellik değerlerini parametrelerden almıyorsa, bunları ek argümanlar
  olarak belirtmeniz gerekmediğini unutmayın call(). */
function Brick() {
  this.width = 10;
  this.height = 20;
}
function BlueGlassBrick() {
  Brick.call(this);
  this.opacity = 0.5;
  this.color = 'blue';
}
var nesne = new BlueGlassBrick();
console.log(typeof nesne);

// Teacher()'ın prototype'ını ve constructor'ını ayarlama
console.log(Teacher.prototype = Object.create(Person.prototype));
console.log(Teacher.prototype.constructor);

                    // ----- 4.ÖRNEK -----
Teacher.prototype.greeting = function() {
  var prefix;
  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }
  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics')
console.log(teacher1.name);
console.log(teacher1.interests[0]);
// teacher1.greeting();
console.log(teacher1.subject);

                    // ----- 5.ÖRNEK -----
// Student class!
function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
  alert('Yo! I\'m ' + this.name.first + ' ' + this.name.last + ' ' + this.age + ' ' + this.gender + ' ' + this.interests + '.');
};

var student1 = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);
student1.greeting();
