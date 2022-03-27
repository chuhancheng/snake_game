import {Apple} from './apple';
import {CreateRect} from '../lib/util';
import {IRect} from '../interface';
import {Snake} from './snake';
import {UIText} from './UI/text';

export class Game {
  private snake: Snake;
  private apple: Apple;
  private canvas: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;
  private score: UIText;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const res = this.canvas.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }
    this.canvasContext = res;
    this.snake = new Snake(0, 0, 20);
    this.apple = new Apple(canvas, this.snake);
    this.score = new UIText(canvas, 'Score: 0', '20px Arial', '#00FF42', {
      x: 10,
      y: 30,
    });
  }

  public gameLoop(): void {
    setInterval(this.show.bind(this), 1000 / 60);
  }

  private show(): void {
    this.Update();
    // clearRect() 方法清空给定矩形内的指定像素。
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.Draw(this.canvasContext);
    this.DrawElement(this.canvasContext);
  }

  private Update(): void {
    this.snake.Update();
    this.score.SetText(`Score:  ${this.snake.tail.length + 1}`);
    this.eatApple();
    this.checkWallHit();
  }

  private Draw(ctx: CanvasRenderingContext2D): void {
    const rect1: IRect = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height,
    };
    CreateRect(ctx, rect1, 'black');
  }

  private DrawElement(ctx: CanvasRenderingContext2D): void {
    this.snake.Draw(ctx);
    this.apple.Draw(ctx);
    this.score.Draw(ctx);
  }

  private checkWallHit(): void {
    if (this.snake.Head.x === -this.snake.size) {
      this.snake.Head = {
        ...this.snake.Head,
        x: this.canvas.width - this.snake.size,
      };
    } else if (this.snake.Head.x === this.canvas.width) {
      this.snake.Head = {...this.snake.Head, x: 0};
    } else if (this.snake.Head.y === -this.snake.size) {
      this.snake.Head = {
        ...this.snake.Head,
        y: this.canvas.height - this.snake.size,
      };
    } else if (this.snake.Head.y === this.canvas.height) {
      this.snake.Head = {...this.snake.Head, y: 0};
    }
  }

  private eatApple(): void {
    if (
      this.snake.Head.x === this.apple.position.x &&
      this.snake.Head.y === this.apple.position.y
    ) {
      this.snake.tail[this.snake.tail.length] = {...this.apple.position};
      this.apple = new Apple(this.canvas, this.snake);
    }
  }

  public EventHandler(event: KeyboardEvent): void {
    this.snake.EventHandler(event);
  }
}
