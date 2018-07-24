// --------------------------------------------------- 1.Bölüm 1.Kısım

var para = document.querySelector('p');

para.addEventListener('click',updateName);

function updateName() {
  var name = prompt("enter a new name");
  para.textContent = "İsim: " + name;
}

document.addEventListener("DOMContentLoaded",function(){
  function createParagraph(){
    var para = document.createElement('p');
    para.textContent = 'Butona Tıklayın...';
    document.body.appendChild(para);
  }
  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',createParagraph);
  }
});

function createParagraph(){
  var para = document.createElement('p');
  para.textContent = 'Butona Tıklayın...';
  document.body.appendChild(para);
}
