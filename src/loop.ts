import { player } from './main';
import { canvas, ctx } from './canevas';
import { scene, setScene, previousScene, setPreviousScene } from './scene';
import keys from './keys'


function loop(): void {
  if (scene !== previousScene) {
    if (scene === 'menu') {
      canvas.width = 1200;
      canvas.height = 800;
    }
    setPreviousScene(scene);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.draw(ctx);
  player.move(keys);
  requestAnimationFrame(loop);
}

export default loop;