String.prototype.repeating = function (times) {
  if (this == null) {
    throw new TypeError("No string");
  }
  let str = "" + this;
  let result = "";
  times = +times;

  if (times != times) {
    times = 0;
  }

  if (times === Infinity) {
    throw new RangeError("no infinity");
  }
  if (times < 0) {
    throw new RangeError("no negative");
  }

  if (str.length === 0 || times === 0) {
    return "";
  }

  while (times) {
    result += str;
    times--;
  }
  return result;
};

console.log("hello ".repeating("asd"));
