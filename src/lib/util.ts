import {ICircle, IRect} from '../interface';

export const CreateRect = (
    canvasContext: CanvasRenderingContext2D,
    rect: IRect,
    color: string
) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(rect.x, rect.y, rect.width, rect.height);
};

export const CreateCircle = (
    canvasContext: CanvasRenderingContext2D,
    circle: ICircle,
    color: string
) => {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(
        circle.x + circle.radius,
        circle.y + circle.radius,
        circle.radius,
        0,
        2 * Math.PI
    );
    canvasContext.fill();
    canvasContext.closePath();
};
