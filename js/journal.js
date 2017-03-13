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
}


exports.entryModule = Entry;
