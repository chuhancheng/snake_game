import { IPosition, IRect, ISprite } from "../interface";

import { CreateRect } from "../lib/util";

export class Snake implements ISprite {
    private movable: boolean = true;
    private speed: number = 5;
    public size: number;
    public tail: IPosition[];
    public direction: IPosition = {x: 0, y: 1};
    constructor(x: number, y: number, size: number){
        this.size = size;
        // The tail in first，the head in last。
        this.tail = [{x, y}];
        this.direction = {x: 0, y: 1};
    }

    public Update(): void {
        this.Move();
    }

    private Move(): void {
        if (!this.movable) {
            return;
        }
        let nextPosition;
        if (this.direction.x === 1) {
            nextPosition = {
                x: this.tail[this.tail.length-1].x + this.size,
                y: this.tail[this.tail.length-1].y
            }
        } else if (this.direction.x === -1) {
            nextPosition = {
                x: this.tail[this.tail.length-1].x - this.size,
                y: this.tail[this.tail.length-1].y
            }
        } else if (this.direction.y === 1) {
            nextPosition = {
                x: this.tail[this.tail.length-1].x,
                y: this.tail[this.tail.length-1].y + this.size
            }
        } else if (this.direction.y === -1) {
            nextPosition = {
                x: this.tail[this.tail.length-1].x,
                y: this.tail[this.tail.length-1].y - this.size
            }
        } 

        this.tail.shift();
        this.tail.push(nextPosition);
        this.FrozenMovement();
    }

    private FrozenMovement(): void {
        this.movable = false;
        setTimeout(() => {
            this.movable = true;
        }, 1000 / (this.speed + 0.5 * this.tail.length));
    }

    public get Head(): IPosition {
        return this.tail[this.tail.length - 1];
    }
    public set Head(position: IPosition) {
        this.tail[this.tail.length - 1] = position;
    }

    public Draw(canvasContext: CanvasRenderingContext2D): void {
        for(let i=0;i<this.tail.length;i++) {
            const rect: IRect = {
                x: this.tail[i].x + 2.5,
                y: this.tail[i].y + 2.5,
                width: this.size - 5,
                height: this.size - 5
            }
            CreateRect(canvasContext, rect, 'white');
        }
    }

    public EventHandler(event: KeyboardEvent): void {
        if (event.key == "ArrowLeft" && this.direction.y != 0) {
            this.direction.x = -1;
            this.direction.y = 0;
        } else if (event.key == "ArrowUp" && this.direction.x != 0) {
            this.direction.x = 0;
            this.direction.y = -1;
        } else if (event.key == "ArrowRight" && this.direction.y != 0) {
            this.direction.x = 1;
            this.direction.y = 0;
        } else if (event.key == "ArrowDown" && this.direction.x != 0) {
            this.direction.x = 0;
            this.direction.y = 1;
        }
    }
}