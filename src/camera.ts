import Maths from './math';

class Camera {
  public x: number;
  public y: number;
  public target: any;
  public canvas: HTMLCanvasElement;
  public worldWidth: number;
  public worldHeight: any;
  public ctx: CanvasRenderingContext2D;
  constructor(
    x: number,
    y: number,
    target: any,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    worldWidth: number,
    worldHeight: number
  ) {
    this.x = x;
    this.y = y;
    this.target = target;
    this.canvas = canvas;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.ctx = ctx;
  }
  startFollow() {
    this.x = Maths.clamp(
      this.target.x - this.canvas.width / 2,
      0,
      this.worldWidth - this.canvas.width
    );
    this.y = Maths.clamp(
      this.target.y - this.canvas.height / 2,
      0,
      this.worldHeight - this.canvas.height
    );
    this.ctx.translate(-this.x, -this.y);
  }
}

export default Camera