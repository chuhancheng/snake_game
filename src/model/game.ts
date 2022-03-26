import { Apple } from "./apple";
import { DrawableElement } from "./DrawableElement";
import { IRect } from "../interface";
import { Snake } from "./snake";

export class Game extends DrawableElement {
    private snake: Snake;
    private apple: Apple;
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement){
        super();
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext('2d');
        this.snake = new Snake(0, 0, 20);
        this.apple = new Apple(canvas, this.snake);
    }

    public gameLoop(): void {
        setInterval(this.show.bind(this), 1000 / 60) //here is our fps value
    }

    private show(): void{
        this.Update();
        this.Draw(this.canvasContext);
    }

    private Update(): void {
        this.snake.Update();
        this.eatApple();
        this.checkWallHit();
    }

    private Draw(ctx: CanvasRenderingContext2D): void {
        // clearRect() 方法清空给定矩形内的指定像素。
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.DrawBackGround(ctx);
        this.snake.Draw(ctx);
        this.apple.Draw(ctx);
        ctx.font = "20px Arial";
        ctx.fillStyle = "#00FF42";
        ctx.fillText(`Score:  ${this.snake.tail.length+1}`, 10, 30, this.canvas.width - 120);
    }

    private checkWallHit(): void {
        if (this.snake.Head.x === - this.snake.size) {
            this.snake.Head = {...this.snake.Head, x: this.canvas.width - this.snake.size};
        } else if (this.snake.Head.x === this.canvas.width) {
            this.snake.Head = {...this.snake.Head, x: 0};
        } else if (this.snake.Head.y === - this.snake.size) {
            this.snake.Head = {...this.snake.Head, y: this.canvas.height - this.snake.size};
        } else if (this.snake.Head.y === this.canvas.height) {
            this.snake.Head = {...this.snake.Head, y: 0};
        }
    }

    private eatApple(): void {
        if (this.snake.Head.x === this.apple.position.x && this.snake.Head.y === this.apple.position.y) {
            this.snake.tail[this.snake.tail.length] = {...this.apple.position};
            this.apple = new Apple(this.canvas, this.snake);
        }
    }
    
    private DrawBackGround(ctx: CanvasRenderingContext2D): void {
        let rect1: IRect = {
            x: 0,
            y: 0,
            width: this.canvas.width,
            height: this.canvas.height
        }
        this.CreateRect(ctx, rect1, "black");
    }

    public EventHandler(event: KeyboardEvent): void {
        this.snake.EventHandler(event);
    }
}