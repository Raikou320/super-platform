import { player, camera } from './main.js';
import { canvas, ctx } from './canvas.js';
import keys from './keys.js';
import { scene, previousScene, setPreviousScene } from './scene.js';
function loop() {
    if (scene !== previousScene) {
        if (scene === 'menu') {
            canvas.width = 800;
            canvas.height = 450;
        }
        else if (scene === 'lv1') {
            canvas.width = 1200;
            canvas.height = 675;
        }
        setPreviousScene(scene);
    }
    if (scene === 'menu') {
    }
    else if (scene === 'lv1') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        camera.startFollow();
        player.draw(ctx);
        player.move(keys);
    }
    requestAnimationFrame(loop);
}
export default loop;
