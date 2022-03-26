import { IRect } from "./interface/util";
import { Apple, Snake } from "./model";

const canvas = <HTMLCanvasElement> document.getElementById('canvas');

const snake = new Snake(0, 0, 20);

let apple = new Apple(canvas, snake);

let canvasContext: CanvasRenderingContext2D = canvas.getContext('2d');

window.onload = () => {
    gameLoop();
}

function gameLoop(): void {
    setInterval(show, 1000 / 5) //here 15 is our fps value
}

function show(): void{
    update();
    draw(canvasContext);
}

function update(): void {
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    snake.Move();
    eatApple();
    checkWallHit();
}

function draw(ctx: CanvasRenderingContext2D): void {
    drawBackGround(ctx);
    snake.Draw(ctx);
    apple.Draw(ctx);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#00FF42";
    ctx.fillText(`Score:  ${snake.tail.length+1}`, 10, 30, canvas.width - 120);
}

function checkWallHit(): void {
    if (snake.Head.x === - snake.size) {
        snake.Head = {...snake.Head, x: canvas.width};
    } else if (snake.Head.x === canvas.width) {
        snake.Head = {...snake.Head, x: 0};
    } else if (snake.Head.y === - snake.size) {
        snake.Head = {...snake.Head, y: canvas.height - snake.size};
    } else if (snake.Head.y === canvas.height) {
        snake.Head = {...snake.Head, y: 0};
    }
}

function eatApple(): void {
    if (snake.Head.x === apple.position.x && snake.Head.y === apple.position.y) {
        snake.tail[snake.tail.length] = {...apple.position};
        apple = new Apple(canvas, snake);
    }
}

function drawBackGround(ctx: CanvasRenderingContext2D): void {
    let rect1: IRect = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    }
    createRect(ctx, rect1, "black");
    createRect(ctx, rect1);
}

function createRect(ctx: CanvasRenderingContext2D, rect: IRect, color?: string): void {
    if (color) {
        ctx.fillStyle = color;
    }
    ctx.fillRect(rect.x, rect.y,rect.width,rect.height);
}

window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.key == "ArrowLeft" && snake.direction.x != 1) {
            snake.direction.x = -1;
            snake.direction.y = 0;
        } else if (event.key == "ArrowUp" && snake.direction.y != 1) {
            snake.direction.x = 0;
            snake.direction.y = -1;
        } else if (event.key == "ArrowRight" && snake.direction.x != 1) {
            snake.direction.x = 1;
            snake.direction.y = 0;
        } else if (event.key == "ArrowDown" && snake.direction.y != 1) {
            snake.direction.x = 0;
            snake.direction.y = 1;
        }
    }, 1);
});