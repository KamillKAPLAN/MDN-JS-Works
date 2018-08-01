var button = document.querySelector('button');
var input = document.querySelector('input');
var list = document.querySelector('ul')

button.onclick = function() {
  if (input.value == '') {
    alert('Boş Geçemezsin!...');
  } else {
    var myItem = input.value;
    input.value = '';

    var listItem = document.createElement('li');
    var listText = document.createElement('a');
    var listBtn  = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.onclick = function()  {
      list.removeChild(listItem);
    }
    input.focus();
  }
}
