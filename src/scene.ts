

export let scene: string = 'menu';
export function setScene(newScene: string): void {
    scene = newScene;
};
export let previousScene: string = '';
export function setPreviousScene(newPreviousScene: string): void {
    previousScene = newPreviousScene;
}