var Gigasecond = function(date) {
  this.initialDate = date;
};

Gigasecond.prototype.date = function() {
  seconds = this.initialDate.valueOf() + 1000000000000
  newTime = new Date(seconds)
  return newTime;


};
module.exports = Gigasecond;