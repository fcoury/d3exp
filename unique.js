Array.prototype.unique = function() {
  var output = [];
  for (i = 0; i < this.length; i++) {
    if (output.indexOf(this[i]) == -1) {
      output.push(this[i]);
    }
  }
  return output;
};

