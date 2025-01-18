class Maths {
    constructor() {
        this.PI = 3.141592653589793;
    }
    static hypot(x, y) {
        return Maths.sqrt(x * x + y * y);
    }
    static sqrt(n) {
        return Maths.pow(n, 0.5);
    }
    static pow(n, power) {
        return Math.pow(n, power);
    }
    static clamp(value, min, max) {
        return Maths.max(min, Maths.min(value, max));
    }
    static min(...numbers) {
        let result = Infinity;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < result)
                result = numbers[i];
        }
        return result;
    }
    static max(...numbers) {
        let result = -Infinity;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > result)
                result = numbers[i];
        }
        return result;
    }
}
export default Maths;
