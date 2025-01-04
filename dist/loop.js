import { player } from './main.js';
import { canvas, ctx } from './canevas.js';
import keys from './keys.js';
import { scene, previousScene, setPreviousScene } from './scene.js';
function loop() {
  if (scene !== previousScene) {
    if (scene === 'menu') {
      canvas.width = 800;
      canvas.height = 450;
    }
    setPreviousScene(scene);
  }
  if (scene === 'menu') {
  } else if (scene === 'lv1') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    player.move(keys);
  }
  requestAnimationFrame(loop);
}
export default loop;
