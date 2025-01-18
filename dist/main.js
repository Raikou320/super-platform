import keys from './keys.js';
import loop from './loop.js';
import Player from './player.js';
import Camera from './camera.js';
import { canvas, ctx } from './canvas.js';
import { setScene } from './scene.js';
setScene('lv1');
export const worldHeight = 800;
export const worldWidth = 2400;
export const player = new Player(0, 0, 0, 0, worldWidth, worldHeight - 123);
export const camera = new Camera(
  0,
  0,
  player,
  canvas,
  ctx,
  worldWidth,
  worldHeight
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q') keys['left'] = true;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd')
    keys['right'] = true;
  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z') keys['up'] = true;
});
document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q')
    keys['left'] = false;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd')
    keys['right'] = false;
  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z') keys['up'] = false;
});
loop();
