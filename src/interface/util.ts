interface IPosition {
    x: number;
    y: number;
}

interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface ISprite {
    Update: () => void;
    Draw: (ctx: CanvasRenderingContext2D) => void;
}

export {
    IPosition,
    IRect,
    ISprite
}