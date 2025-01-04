import Player from './player';
import loop from './loop';
import keys from './keys';

export const worldHeight: number = 800;
export const worldWidth: number = 2400;
export const player: Player = new Player(0, 0, 0, 0, worldWidth, worldHeight - 123);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q') keys["left"] = true;
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys["right"] = true;
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z') keys["up"] = true;
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q') keys["left"] = false;
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys["right"] = false;
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'z') keys["up"] = false;
})

loop();