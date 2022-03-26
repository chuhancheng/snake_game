import { IRect } from "../interface";

export class DrawableElement {
    constructor(){}

    protected CreateRect(canvasContext: CanvasRenderingContext2D, rect: IRect, color: string): void {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
}