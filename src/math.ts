class Maths {
  public PI: number;
  constructor() {
    this.PI = 3.141592653589793
  }
  static hypot(x: number, y: number): number {
    return Maths.sqrt(x * x + y * y);
  }
  static sqrt(n: number): number {
    return Maths.pow(n, 0.5);
  }
  static pow(n: number, power: number): number {
    return n ** power;
  }
}

export default Maths
