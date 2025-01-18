class Collider {
    constructor(r1, r2) {
        this.r1 = r1;
        this.r2 = r2;
    }
    collideAll() {
        return !(this.r1.x < this.r2.x + this.r2.width &&
            this.r1.x + this.r1.width > this.r2.x &&
            this.r1.y < this.r2.x + this.r2.height &&
            this.r1.y + this.r1.height > this.r2.y);
    }
    collideHigh() {
        return (this.r1.y + this.r1.height >= this.r2.y &&
            this.r1.y < this.r2.y &&
            this.r1.x + this.r1.width > this.r2.x &&
            this.r1.x < this.r2.x + this.r2.width);
    }
}
export default Collider;
