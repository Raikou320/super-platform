import Player from './player.js';
import loop from './loop.js';
import keys from './keys.js';
export const worldHeight = 800;
export const worldWidth = 2400;
export const player = new Player(0, worldHeight - 600, 0, 0, worldWidth, worldHeight - 123);
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q')
        keys["left"] = true;
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd')
        keys["right"] = true;
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z')
        keys["up"] = true;
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q')
        keys["left"] = false;
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd')
        keys["right"] = false;
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z')
        keys["up"] = false;
});
loop();
