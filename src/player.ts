class Player {
  public x: number;
  public y: number;
  public sx: number;
  public sy: number;
  public width: number;
  public height: number;
  public color: string;
  public src: HTMLImageElement;
  public minX: number;
  public minY: number;
  public maxX: number;
  public maxY: number;
  public gravity: number;
  private isGrounded: boolean = false;
  constructor(
    x: number,
    y: number,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number
  ) {
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
    this.gravity = 5;
  }
  applyPhysics(): void {
    if (this.y < this.maxY) this.y += this.gravity;
    else {
      this.isGrounded = true;
      this.y = this.maxY;
    }
  }
  move(keys: { up?: boolean; left?: boolean; right?: boolean }): void {
    if (keys.up && this.y + this.sy >= this.minY) this.y += this.sy;
    if (keys.left && this.x - this.sx >= this.minX) this.x -= this.sx;
    if (keys.right && this.x + this.sx <= this.maxX) this.x += this.sx;
  }
  describe(): void {
    console.log(`Position: (${this.x}, ${this.y})`);
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
  }
}

export default Player