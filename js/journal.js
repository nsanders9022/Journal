function Entry() {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(entryBody) {
  var words = entryBody.split(" ");
  return words.length;
};

Entry.prototype.countVowels = function(entryBody) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;

  for (var i=0; i < entryBody.length; i++) {
    if ((vowels.indexOf(entryBody[i])) != -1) {
      count +=1;
    }
  }
  return count;
};

Entry.prototype.getTeaser = function(entryBody) {
  var punctuation = [".", "!", "?"];
  for (var j = 0; j < entryBody.length; j++) {
    if ((punctuation.indexOf(entryBody[j])) != -1) {
      var slice_location = j;
      var first_sentence = entryBody.slice(0,slice_location + 1);
      var sentence_words = first_sentence.split(" ");
      if (sentence_words.length <= 8) {
        return sentence_words.join(" ");
      } else {
        var newArray = []
        for(i = 0; i < 8; i++)
        {
          newArray.push(sentence_words[i]);
        }
        return newArray.join(" ");
      }
      break;
    }
  }
};


exports.entryModule = Entry;
