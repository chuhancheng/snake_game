export declare class Game {
  private snake;
  private apple;
  private canvas;
  private canvasContext;
  private score;
  constructor(canvas: HTMLCanvasElement);
  gameLoop(): void;
  private show;
  private Update;
  private Draw;
  private DrawElement;
  private checkWallHit;
  private eatApple;
  EventHandler(event: KeyboardEvent): void;
}
