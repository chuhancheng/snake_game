import {IPosition, ISprite} from '../../interface';
export declare class UIText implements ISprite {
  private text;
  private font;
  private color;
  private position;
  private canvas;
  constructor(
    canvas: HTMLCanvasElement,
    text: string,
    font: string,
    color: string,
    position: IPosition
  );
  Update(): void;
  SetText(text: string): void;
  Draw(canvasContext: CanvasRenderingContext2D): void;
}
