var possibilities = document.getElementById('possibilities');
var victim = document.getElementById('victim3');
var place = document.getElementById('place7');
var tool = document.getElementById('tool2');
var tnt = document.getElementById('tnt');

times = 3;
possibilities.innerHTML = times;

var send = function() {
  times = times - 1;
  possibilities.innerHTML = times;

    if (victim.checked && place.checked && tool.checked) {
        document.body.classList = "second";
    }
    else if (times == 0) {
      document.body.classList = "fourth";
    }

    else {
      alert('Nem jó a megoldás, még ' + times + ' lehetőséged maradt');
    }
}


var count = 3;

var dedetonate = function() {
  var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  count = count-1;

  if (year == 1979 && month == 05 && day == 12) {
    document.body.classList = "third";
  }
  else if (count == 0) {
    document.body.classList = "fourth";
  }
  else {
    alert("A kód nem jó! Még " + count + " lehetőséged van.");
    tnt.classList = "tnt" + count;
  }
}
