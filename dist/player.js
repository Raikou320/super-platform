class Player {
    constructor(x, y, minX, minY, maxX, maxY) {
        this.x = x;
        this.y = y;
        this.sx = 5;
        this.sy = -25;
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
        this.width = 32;
        this.height = 94;
        this.color = 'red';
        this.src = new Image();
        this.src.src = '../assets/images/player.png';
    }
    move(keys) {
        if (keys.up && this.y + this.sy >= this.minY)
            this.y += this.sy;
        if (keys.left && this.x - this.sx >= this.minX)
            this.x -= this.sx;
        if (keys.right && this.x + this.sx <= this.maxX)
            this.x += this.sx;
    }
    describe() {
        console.log(`Position: (${this.x}, ${this.y})`);
    }
    draw(ctx) {
        ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
    }
}
export default Player;
