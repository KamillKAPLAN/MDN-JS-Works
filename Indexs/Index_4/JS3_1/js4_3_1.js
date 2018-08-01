var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  var verse = verseChoose.value;
  updateDisplay(verse);
}

function updateDisplay(verse){
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  var url = '../verse/' + verse + '.txt';

  var myFetch = fetch(url);
  myFetch.then(function(response) {
    response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });
  /* --OR[ VEYA ] bu şekildede yazılabilir.
      myFetch.then(function(response){
        return response.text()
      }).then(function(text) {
        poemDisplay.textContent = text;
      });
  */
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
