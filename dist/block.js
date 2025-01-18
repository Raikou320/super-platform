class Block {
    constructor(x, y, width = 40, height = 40) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(ctx) {
        ctx.fillStyle = '#633000';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
export default Block;
