var Maths = /** @class */ (function () {
  function Maths() {}
  Maths.hypot = function (x, y) {
    return this.sqrt(x * x + y * y);
  };
  Maths.sqrt = function (n) {
    return this.pow(n, 0.5);
  };
  Maths.pow = function (n, power) {
    return Math.pow(n, power);
  };
  Maths.PI = 3.141592653589793;
  return Maths;
})();
export default Maths;