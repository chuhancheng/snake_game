import { IRect } from "../interface";

export const CreateRect = (canvasContext: CanvasRenderingContext2D, rect: IRect, color: string) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(rect.x, rect.y, rect.width, rect.height);
}