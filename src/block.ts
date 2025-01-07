class Block {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  constructor(x: number, y: number, width: number = 40, height: number = 40) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#633000'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default Block