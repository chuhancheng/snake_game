import { IPosition, ISprite } from "../../interface";

import { Game } from "../game";

export class UIText implements ISprite {
    private text: string;
    private font: string;
    private color: string;
    private position: IPosition;
    private canvas: HTMLCanvasElement;
    private game: Game;
    constructor(canvas: HTMLCanvasElement, text:string, font: string, color: string, position: IPosition){
        this.canvas = canvas;
        this.text = text;
        this.font = font;
        this.color = color;
    }

    public Update(): void {}

    public SetText(text: string): void {
        this.text = text;
    }

    public Draw(canvasContext: CanvasRenderingContext2D): void {
        canvasContext.font = this.font;
        canvasContext.fillStyle = this.color;
        canvasContext.fillText(this.text, 10, 30, this.canvas.width - 120);
    }
}