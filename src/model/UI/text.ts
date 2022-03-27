import {IPosition, ISprite} from '../../interface';

export class UIText implements ISprite {
    private text: string;
    private font: string;
    private color: string;
    private position: IPosition;
    private canvas: HTMLCanvasElement;
    constructor(
        canvas: HTMLCanvasElement,
        text: string,
        font: string,
        color: string,
        position: IPosition
    ) {
        this.canvas = canvas;
        this.text = text;
        this.font = font;
        this.color = color;
        this.position = position;
    }

    public Update(): void {}

    public SetText(text: string): void {
        this.text = text;
    }

    public Draw(canvasContext: CanvasRenderingContext2D): void {
        canvasContext.font = this.font;
        canvasContext.fillStyle = this.color;
        canvasContext.fillText(
            this.text,
            this.position.x,
            this.position.y,
            this.canvas.width - 120
        );
    }
}
