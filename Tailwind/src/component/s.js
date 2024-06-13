function f(x) {
  x = "x-" + x;
  return function (y) {
    y = "y-" + x;
    return function (x) {
      return "z-" + y;
    };
  };
}
let g = f("a")("b")("c");
console.log(g);
