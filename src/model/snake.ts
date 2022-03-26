import { IPosition, IRect } from "../interface";

import { DrawableElement } from "./DrawableElement";

export class Snake extends DrawableElement {
    public size: number;
    public tail: IPosition[];
    public direction: IPosition = {x: 0, y: 1};
    constructor(x: number, y: number, size: number){
        super();
        this.size = size;
        // The tail in first，the head in last。
        this.tail = [{x, y}];
        this.direction = {x: 0, y: 1};
    }

    public Move(): void {
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
    }

    public get Head(): IPosition {
        return this.tail[this.tail.length - 1];
    }
    public set Head(position: IPosition) {
        this.tail[this.tail.length - 1] = position;
    }

    public Draw(canvasContext: CanvasRenderingContext2D): void {
        for(let i=0;i<this.tail.length;i++) {
            let rect: IRect = {
                x: this.tail[i].x + 2.5,
                y: this.tail[i].y + 2.5,
                width: this.size - 5,
                height: this.size - 5
            }
            this.CreateRect(canvasContext, rect, 'white');
        }
    }
}