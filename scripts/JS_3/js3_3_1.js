// --------------------------------------------------- 3.Bölüm 3.Kısım
                    // ----- 1.ÖRNEK -----
/* Prototipler, JavaScript nesnelerinin birbirinden özelliklerini miras aldıkları mekanizmadır.
  JavaScript genellikle prototip tabanlı bir dil olarak tanımlanır - her nesne, fonk. ve özelliklerden miras aldığı
    bir şablon nesnesi olarak işlev gören bir prototip nesnesine sahiptir . Bir nesnenin prototip nesnesinde ayrıca,
    fonksyonları ve özelliklerden miras aldığı bir prototip nesnesi de olabilir. Bu genellikle bir prototip zinciri
    olarak adlandırılır ve neden farklı nesnelerin kendilerine sunulan diğer nesneler üzerinde tanımlanmış özellik
    ve yöntemlere sahip olduğunu açıklar.
  özelliklerin ve fonksiyonların prototype, nesne örneklerinin kendileri değil, Nesnelerin yapıcı işlevlerinde özellik tanımlanır .
  JavaScript'te, nesne örneği ile prototipi arasında bir bağlantı yapılır prototype özellik ve fonksyonlar prototip zincirinden yürürken bulunur.
  - Önemli: prototype Mülk, JavaScript'in en kafa karıştırıcı olarak adlandırılan bölümlerinden biridir - this geçerli nesnenin prototip nesnesini
  işaret ettiğini düşünebilirsiniz , ancak bunu (erişilebilen dahili bir nesnedir __proto__, hatırlamıyor musunuz) düşünebilirsiniz . prototype bunun
  yerine, devralınmak istediğiniz üyeleri tanımladığınız bir nesneyi içeren bir özelliktir.
*/

function Person(first,last,age,gender,interests) {
  this.name = {
    'first' : first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
  };
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// console.log(person1); // tarayıcıyı bu nesnede bulunan üye adları ile otomatik olarak tamamlamayı deneyin.
// console.log(Person); // Bu listede, üzerinde tanımlı üyelerini göreceksiniz
// console.log(person1.valueOf()); // Bu yöntem basitçe çağrılan nesnenin değerini döndürür
// console.log(person1.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(Object.prototype);

                    // ----- 2.ÖRNEK -----
var person2 = Object.create(person1);
// console.log(person2.__proto__);
// Her constructor fonk. bir prototype özelliğine sahiptir. Constructor özelliği bir nesne değeri içerir.
// console.log(person1.constructor);

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
// console.log(person3.name.first + ' ' + person3.age + ' ' + person3.greeting());

/*
 - Prototipleri değiştirme : prototype Bir kurucu işlevinin özelliğini değiştirmeye yönelik bir örneğe bakalım
      (prototipe eklenen yöntemler, kurucudan oluşturulan tüm nesne örneklerinde kullanılabilir).
*/
                    // ----- 3.ÖRNEK -----
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
console.log(person1.farewell());

/*
  - Yapıcının içinde tanımlandığı şekliyle kişinin adını içeren bir uyarı mesajı görüntülenmelidir. Bu gerçekten yararlıdır,
  ancak daha yararlı olan şey, tüm miras zincirinin dinamik olarak güncellenmesidir. Bu yeni yöntem, kurucudan türetilen
  tüm nesne örneklerinde otomatik olarak kullanılabilir. Bunu bir an düşünün. Kodumuzda yapıcıyı tanımlarız, sonra kurucunun
  bir örnek nesnesini oluştururuz, sonra kurucunun prototipine yeni bir yöntem ekliyoruz:
  - prototip üzerinde sabit özellikleri tanımlayabilirsiniz (yani, asla değişmesi gerekmeyenler), fakat genellikle kurucunun
  içindeki özellikleri tanımlamak için daha iyi çalışır.
  - daha fazla nesne tanımlaması için oldukça yaygın bir model, constructor içindeki özellikleri ve prototip üzerindeki fonksiyonları
  tanımlamaktır. Bu, kurucunun yalnızca özellik tanımlarını içerdiği ve kodların ayrı bloklara ayrıldığı için kodun okunmasını kolaylaştırır.
*/

                    // ----- 4.ÖRNEK -----
// Constructor özellik tanımlaması
function Test(a, b, c, d) {
  // özellik tanımlama
}
// İlk metod tanımlama
Test.prototype.x = function() {
};

// İkinci metod tanımlama
Test.prototype.y = function() {
};
