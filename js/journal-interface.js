var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var aTitle = $('#title').val();
    var aBody = $('#body').val();
    var newEntry = new Entry();
    var result = newEntry.countWords(aBody);
    var vowelResult = newEntry.countVowels(aBody);

    $('#word-count').append(result);
    $('#vowel-count').append(vowelResult);
  });
});
