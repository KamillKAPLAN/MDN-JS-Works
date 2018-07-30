// --------------------------------------------------- 3.Bölüm 4.Kısım
                    // ----- 1.ÖRNEK -----
// Person ve Teacher örneklerini classlara dönüştürüyoruz...
class Person{
  // Person class'ının constructor fonk. tanımlanır.
  constructor(first, last, age, gender, interests){
    this.name = {
      first,
      last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  // Person class'ının fonk.
  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

var han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

var leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
leia.farewell();

                    // ----- 2.ÖRNEK -----
// Sınıf sözdizimi ile miras
/* Yukarıda bir kişiyi temsil etmek için bir sınıf oluşturduk. Tüm insanlar için ortak bir dizi niteliğe
  sahiptirler; Bu bölümde, uzmanlık Teacher sınıfımızı oluşturarak, Person modern sınıf söz dizimini
  kullanmasını sağlıyoruz. Buna alt sınıf veya alt sınıf oluşturma denir.
  Bir alt sınıf oluşturmak için, sınıfımızı temel almak istediğimiz sınıfa JavaScript'i bildirmek için
  'extends' anahtar kelimesini kullanırız.
*/

/* super()operatörün içindeki ilk öğe olarak tanımlayarak daha okunabilir hale getirebiliriz constructor().
  Bu, üst sınıfın yapıcısını çağırır ve orada belirttikleri super()sürece, parametreler olarak belirttiğimiz
  üyeleri devralır:
*/
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
  /* Oluşturduğumuz sınıflardaki bir özniteliğin değerlerini değiştirmek istediğimiz veya bir özelliğin nihai
      değerinin ne olacağını bilmediğimiz zamanlar olabilir. Teacher Örneği kullanarak, öğretmenin hangi dersi
      oluşturmadan önce öğreteceğini bilemeyiz ya da konusu terimler arasında değişebilir.
    Bu gibi durumları getters ve setters halledebiliriz.
    Öğretmen sınıfını getters ve setters geliştirelim. Sınıf, son baktığımız zamanki gibi başlıyor.
    Getters ve setters çiftler halinde çalışır. Bir alıcı değişkenin mevcut değerini döndürür ve karşılık gelen
    ayarlayıcı, değişkenin değerini tanımladığı değere değiştirir.
  */
  get subject() {
    return this._subject; // Mevcut değerini göstermek için
  }
  set subject(newSubject) {
    this._subject = newSubject; // Mülkte yeni bir değer atamak için
  }
  /* Yukarıda bizim sınıfımızda subject mülk için bir getters ve setters var. _ Ad mülkümüzü saklamak için ayrı
    bir değer yaratmak için kullanıyoruz. */
}

var snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
console.log(snape.age); // 58

console.log(snape.subject); // Dark arts
  snape._subject = 'Balloon animals'
console.log(snape._subject);

                    // ----- 3.ÖRNEK -----
function Product(name,price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
var ornk = new Food('cheese', 5)
console.log(ornk.name + ' ' + ornk.price + ' ' + ornk.category);

                    // ----- 4.ÖRNEK -----
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}
var car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(car1.make);

                    // ----- 5.ÖRNEK -----
class Polygon {
  constructor(height, width){
    this.area = height * width;
  }
}
var Plygn = new Polygon(4,3);
console.log(Plygn.area);

                    // ----- 6.ÖRNEK -----
class Polygoon{
  constructor(height, width) {
    this.name = 'Polygoon';
    this.height= height;
    this.width = width;
  }
}

class Square extends Polygoon {
  constructor(length) {
    super(length,length);
    this.name = 'Square';
  }
}
console.log(new Square(15, 15));

                    // ----- 7.ÖRNEK -----
class Poolygon {
  constructor() {
    this.name = 'Poolygon';
  }
}
var poly1 = new Poolygon();
console.log(poly1.name);
