import {Game} from './model/game';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');

const game = new Game(canvas);

window.onload = () => {
  game.gameLoop();
};

window.addEventListener('keydown', event => {
  game.EventHandler(event);
});
