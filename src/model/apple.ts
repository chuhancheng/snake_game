import {IPosition, IRect, ISprite} from '../interface';

import {CreateRect} from '../lib/util';
import {Snake} from './snake';

export class Apple implements ISprite {
    public position: IPosition = {x: 0, y: 0};
    public color = 'red';
    public size = 20;
    constructor(canvas: HTMLCanvasElement, snake: Snake) {
        console.log('Generate Apple');
        const check = true;
        while (check) {
            const position: IPosition = this.GeneratePosition(
                canvas,
                snake.size
            );
            console.log('Apple new position:', position);
            if (this.TouchWithSnake(position, snake)) {
                console.log('apple new position touch with snake!');
                continue;
            }
            this.position = {...position};
            this.size = snake.size;
            break;
        }
        console.log('Apple generated.');
    }

    private GeneratePosition(
        canvas: HTMLCanvasElement,
        snakeSize: number
    ): IPosition {
        const position: IPosition = {
            x:
                Math.floor((Math.random() * canvas.width) / snakeSize) *
                snakeSize,
            y:
                Math.floor((Math.random() * canvas.height) / snakeSize) *
                snakeSize,
        };
        return position;
    }

    private TouchWithSnake(position: IPosition, snake: Snake): boolean {
        let isTouching = false;
        for (let i = 0; i < snake.tail.length; i++) {
            if (
                position.x === snake.tail[i].x &&
                position.y === snake.tail[i].y
            ) {
                isTouching = true;
            }
        }
        return isTouching;
    }

    public Update(): void {}

    public Draw(canvasContext: CanvasRenderingContext2D): void {
        const rect: IRect = {
            x: this.position.x + 2.5,
            y: this.position.y + 2.5,
            width: this.size - 5,
            height: this.size - 5,
        };
        CreateRect(canvasContext, rect, this.color);
    }
}
