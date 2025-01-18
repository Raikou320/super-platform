import Maths from './math.js';
class Camera {
  constructor(x, y, target, canvas, ctx, worldWidth, worldHeight) {
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
export default Camera;