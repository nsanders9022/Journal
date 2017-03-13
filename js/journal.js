function Entry() {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(entryBody) {
  var words = entryBody.split(" ");
  return words.length;
};


exports.entryModule = Entry;
