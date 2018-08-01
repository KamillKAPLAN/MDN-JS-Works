/* - istemci tarafında JavaScript yazarken, Hızlı Uygulama Programlama Arabirimleri (API) ile karşılaşacaksınız. API'lar, sitenin üzerinde
  çalıştığı tarayıcı ve işletim sisteminin farklı yönlerini değiştirmek veya diğer web sitelerinden veya hizmetlerden verileri değiştirmek
  için programlama özellikleridir.
  - API, geliştiricilerin karmaşık işlevleri daha kolay oluşturmasına olanak sağlamak için programlama dillerinde kullanıma sunulan yapılardır.
  - İstemci tarafında JavaScript'in birçok API'si vardır bunlar JavaScript dilinin kendisinin bir parçası değildir, bunun yerine JavaScript
  kodunuzda kullanmanız için ekstra süper güçler sağlayarak temel JavaScript dilinin üzerine kurulmuştur. Genellikle iki kategoriye ayrılırlar:
  1.) Tarayıcı API'leri web tarayıcınızda yerleşiktir ve tarayıcıdan ve çevredeki bilgisayar ortamından verileri açığa çıkarır ve bununla
  birlikte yararlı karmaşık şeyler yapabilir.
  2.) Üçüncü taraf API'ları varsayılan olarak tarayıcıda yerleşik değildir ve genellikle kodlarını ve bilgilerini Web'de bir yerden almak
  zorunda kalırsınız.
*/
/* - Web sayfaları ve uygulamaları yazarken, yapmak isteyeceğiniz en yaygın şeylerden biri, belge yapısını bir şekilde manipüle etmektir.
  Bu genellikle, Document nesnenin yoğun kullanımını sağlayan HTML ve stil bilgilerini denetlemek için bir dizi API'ler olan
  Document Object Model (DOM) kullanılarak yapılır
   - DOM içindeki bir öğeyi işlemek için önce onu seçmeniz ve bir değişken içinde bir referansı saklamanız gerekir.
   - Web tarayıcıları, birçoğu JavaScript kullanan bir web geliştiricisi tarafından kontrol edilemeyen veya manipüle edilemeyen birçok
  hareketli parça içeren çok karmaşık yazılım parçalarıdır
*/
console.log("Width: " + window.innerWidth);
console.log("Height: " + window.innerHeight);

var link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://www.google.com';

/*
  var element = document.querySelector(selectors);
  var element = document.getElementsByTagName(name);
  var element = document.getElementById(id);
  var element = document.querySelectorAll(selectors);
*/

var sect = document.querySelector('section');

//  yeni bir paragraf oluşturalım, var element = document.createElement(tagName[,options]);

var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';

// bölümün sonunda yeni paragrafı aşağıdakileri kullanarak ekleyebilirsiniz

sect.appendChild(para);

var text = document.createTextNode(' - the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);

// DOM'a düğüm eklemek için ihtiyacınız olan şeylerin çoğu budur - dinamik arayüzler oluştururken bu yöntemlerden çok faydalanabilirsiniz.

/*
  Bir kopya oluşturmak ve eklemek isterseniz,   ' sect.cloneNode(linkPara)   '
  Bir düğümün kaldırılması da oldukça kolaydır, ' sect.removeChild(linkPara) '
*/

sect.appendChild(linkPara);
linkPara.parentNode.removeChild(linkPara);

// Manipulating stilleri: CSS stillerini JavaScript aracılığıyla çeşitli şekillerde manipüle etmek mümkündür.

// para.style.color = 'white';
// para.style.background = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

// Element.setAttribute()- bu iki argüman, eleman üzerinde ayarlamak istediğiniz özellik ve onu ayarlamak istediğiniz değeri alır

para.setAttribute('class','highlight');
