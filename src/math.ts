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
  static clamp(value: number, min: number, max: number): number {
    return Maths.max(min, Maths.min(value, max))
  }
  static min(...numbers: any): number {
    let result = Infinity;
    for (let i = 0; i < numbers.length; i ++) {
      if (numbers[i] < result) result = numbers[i]
    }
    return result
  }
  static max(...numbers: any): number {
    let result = -Infinity;
    for (let i = 0; i < numbers.length; i ++) {
      if (numbers[i] > result) result = numbers[i];
    }
    return result;
  }
}

export default Maths
