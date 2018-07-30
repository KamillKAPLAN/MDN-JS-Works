// --------------------------------------------------- 3.Bölüm 3.Kısım
                    // ----- 1.ÖRNEK -----
/*
  Javascript te sınıf yoktur. Sadece object(nesne) ve (temel veri tipleri) leri mevcuttur.
  Object literal, constructor function(kurucu fonksiyon) ve singleton function kullanarak nesne oluşturulabilir.
*/
// CONSTRUCTOR FUNCTION
function FunctionConstructor() {
  this.Ad = 'Kamil',
  this.Soyad = 'KAPLAN',
  this.Yas = 24,
  this.AdSoyad = function() {
    return this.Ad + ' ' + this.Soyad
  };
}

var nesne1 = new FunctionConstructor();
// console.log(typeof nesne1);
// console.log(nesne1.AdSoyad());

                    // ----- 2.ÖRNEK -----
// OBJECT LİTERAL
var nesne2 = {
  Ad : 'Kamil',
  Soyad : 'KAPLAN',
  AdSoyad : function() {
    return this.Ad + ' ' + this.Soyad
  }
};

// console.log(typeof nesne2);
// console.log(nesne2.AdSoyad());

                    // ----- 3.ÖRNEK -----
// SİNGLETON FUNCTION
var nesne3 = new function() {
  this.Ad = 'Kamil',
  this.Soyad = 'KAPLAN',
  this.AdSoyad = function() {
    return this.Ad + ' ' + this.Soyad
  }
}

// console.log(typeof nesne3);
// console.log(nesne3.AdSoyad());
// console.log(nesne3.hasOwnProperty('Ad'));
// console.log(nesne3.hasOwnProperty('Adi'));

/*
  Yukarıda görüldüğü gibi Javascript te nesne tanımlamanın farklı türleri vardır. Görüldüğü gibi nesne
  oluşturmak için sınıf kullanmıyoruz. Bundan dolayı Javascript sınıf tabanlı değil -- prototype -- tabanlı bir dildir.
  Nesne oluşturulduktan sonra nesnenin örneği ile kendi içinde tanımlanmış özelliklerine ve metotlarına ulaşıp kullanabiliyoruz.
  - hasOwnProperty() - gizlenmiş bu fonksiyon(metot) -- Javascript Prototype -- dan gelir. Aslında burada -- kalıtım -- yolu
  ile önceden tanımlanmış bu metodu miras aldık
*/

                    // ----- 4.ÖRNEK -----
/* Prototype Nedir?
Javascript te ki her nesne(Object, Array, Function…) içinde prototype olarak bilinen bir property(özellik) sahiptir.
  Bu özellik aslında bir nesnedir. Bütün javascript nesneleri, kendi prototype nesne içindeki özellik ve metotları miras alır. Object,
  Array ve Function temel nesne tiplerinin prototype özelliklerini inceleyelim.
 - Object.prototype özelliği, temel Object nesnesinin prototype nesnesini temsil eder. Javascript teki bütün nesneler Object.prototype
    nesnesinden türer. Böylece bütün nesneler Object.prototype içinde bulunan özellikleri ve metotları miras alır.
 - Array.prototype özelliği, Array constructor için prototype temsil eder. Array nesne örnekleri(instance) Array.prototype miras alır.
 - Function.prototype özelliği, Function nesnesinin prototype nesnesini temsil eder. Yani Function nesneleri Function.prototype özelliğinden türerler.
*/

                    // ----- 5.ÖRNEK -----
var myFunction = function (name) {
    this.Ad = name;
    return this;
}
// console.log(typeof myFunction.prototype);//object
// console.log(myFunction.prototype);
// console.log(typeof myFunction); //function
/*
  Oluşturduğumuz fonksiyonun tipi function tipindedir. Function Javascriptte tanımlanmış bir nesnedir. Kendisine ait metotlara ve özelliklere sahiptir.
  Örneğin, en sık kullanılan metotları apply() ve call() metotlarıdır. Ayrıca en sık kullanılan özellikleri length ve consturctor özelliğidir. Function
  nesnesinin başka en önemli özelliği prototype özelliğidir. Peki bu prototype özelliği tam olarak nedir?
*/

                    // ----- 6.ÖRNEK -----
/*
  fonksiyon tanımlandığı anda prototype özelliği otomatik olarak boş bir nesne oluşturur. Bu prototype özelliğinin içerisine
  tarafımızdan eklemek isteğimiz özellik ve metotları ekleyebiliriz. Böylece kalıtımı işletmiş oluruz.
*/
myFunction.prototype.yazdir = function() {
  // console.log(this.Ad);
}
var nesne = new myFunction('KAMİL KAPLAN');
nesne.yazdir();
// console.log(nesne.toString());
/*
  Javascriptte fonksiyon tanımlandığı anda veya yeni bir nesne oluşturduğumuzda kendi prototype boş nesne özelliğini kendisine eklediğini söylemiştik.
  Bir fonksiyon nesnesi üzerinden bir özellik çağırdığımızda öncelikle kendi içerisinde çağırdığımız bu özelliğin olup olmadığına bakar.(myFunction da
  sadece “ad” özelliği vardır.) Eğer bulamazsa fonksiyonun prototype nesne özelliği içerisinde bu özelliği arar.  Bu arama işlemi özellik bulunana kadar
  ya da prototype özelliği null olana kadar devam eder. Yani özellik veya metot arama işlemi prototype chain olarak bilinen zincirleme şeklide olur.
  Peki prototype özelliği içerisinde tanımlanmış özellik veya metotlara nasıl erişir. Bunu standart olmayan __proto__ özelliği ile erişir.
*/
// console.log(myFunction.__proto__ == Function.prototype); //true

                    // ----- 7.ÖRNEK -----
/*
  Niçin Prototype Özelliğini Kullanmalıyız? Bilindiği gibi Javascript nesneye ait özellik oluştururken anahtar/değer(key/value) şeklinde özellik eklemesi yapıyoruz.
  Araba üreten bir fabrikamız olduğunu düşünelim. Temel olarak araba nesnelerini aşağıdaki gibi object literal kullanarak tanımlayabiliriz.
*/
var araba1 = {
  marka : 'Doğan',
  model : '5',
  uret : function() {
    console.log(this.marka + ' ' + this.model + ' üretildi.');
  }
};

var araba2 = {
  marka : 'Doğan',
  model : 'SLX',
  uret : function() {
    // console.log(this.marka + ' ' + this.model + ' üretildi.');
  }
};
//  ...
/*
  Düşünsenize bunun gibi 50 adet araba nesnesi ürettiğimizi düşünün. Her ürettiğimiz bu araba nesneleri bellekte ayrı ayrı tutulacak. Doğal
  olarak tarayıcı üzerinde zamanla bellekte doluluktan dolayı yavaşlamalar meydana gelecektir. Bu da istemediğimiz bir durumdur. Ayrıca
  alt alta 50 tane araba nesnesi tanımlamak geliştirici için zaman kaybına neden olacaktır. Yine aynı şekilde nesneler üzerinde bir
  değişiklik yapmak istediğimiz zaman hepsi için ayrı ayrı değişiklik yapmamız gerekecektir. İşte bu yaşanan sıkıntıları bir
  nebzede olsa constructor function nesnesi tanımlayarak çözebiliriz. Şimdi yeniden araba nesnesini tanımlayalım.
*/
var arabaObject = function(marka, model){
  this.marka = marka;
  this.model = model;
  this.uret = function() {
    // console.log(this.marka + ' ' + this.model + ' üretildi.');
  }
  return this;
}
/*
  Görüldüğü gibi araba nesnesini constructor function tipinde tanımladık. Şimdi arabaObject nesnesine uret
  metodunu ekleyebiliriz. Fakat uret() metodu dikkat edildiyse tüm nesne örnekleri için aynı çalışacak.
  Şimdi 50 adet araba nesnesi oluşturalım ve bir dizide tutalım. Daha sonra araba üretimine başlayalım
*/
arrayOfArabaObjects = [];
for (var i = 0; i < 50; i++) {
  arrayOfArabaObjects.push(new arabaObject('Doğan',i+1));
}
for (var i = 0; i < arrayOfArabaObjects.length; i++) {
  arrayOfArabaObjects[i].uret();
}
/*
  Yukarıda görüldüğü gibi 50 adet araba nesnesi oluşturup bir dizide tuttuk. Daha sonra araba üretimini yapmak için her nesne için
  uret() metodunu çağırdık. Dikkat ettiyseniz her nesne için uret metodu ayrı ayrı oluşturuluyor. Bu ileriki zamanlarda bellek
  yetersizliklerine neden olup tarayıcı üzerinden cevap alınamadı hatalarına neden olacaktır. Ayrıca uygulama çalışma anında iken uret
  metodu override edilerek bazı değişikliklere uğramasını isteyebiliriz. Bunun için uret metodu çağırılmadan hemen önce her nesne için
  uret metodunu yenilemeliyiz. Buradaki dezavantaj her nesne için uret metodunu döngü içinde değiştirmek.
*/
for (var j = 0; j < arrayOfArabaObjects.length; j++) {
    arrayOfArabaObjects[j].uret = function () {
        // console.log(this.marka + ' ' + this.model + ' yeni modeli üretildi.');
    }
    arrayOfArabaObjects[j].uret();
}
/*
  Bunun gibi sıkıntılar bilindiği gibi C#,Java gibi sınıf tabanlı nesneye yönelimli dillerde kalıtım ile çözülür. İşte Javascriptte
  bize kalıtım özelliğini prototype sağlar. Hemen araba üretimini ptototype tabanlı değiştirelim.
*/
var arabaObject2 = function (marka, model) {
    this.marka = marka;
    this.model = model;
    return this;
}
arabaObject2.prototype.urett = function () {
    // console.log(this.marka + ' ' + this.model + ' üretildi.');
}

arrayOfArabaObjects = new Array();
for (var i = 0; i < 50; i++) {
    arrayOfArabaObjects.push(new arabaObject2('Araba', i+1));
}

for (var j = 0; j < arrayOfArabaObjects.length; j++) {
    arrayOfArabaObjects[j].urett();
}
/*
  Yukarıda görüldüğü gibi arabaObject nesnesinin prototype özelliğine uret metodunu ekleyerek, tüm arabaObject nesne örnekleri üretim için artık
  ortak paylaşılan uret metodunu kullanacaklardır. Zamanla araba üretiminin yapısı değişebilir.
*/
