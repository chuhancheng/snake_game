import {IPosition, ISprite} from '../interface';
import {Snake} from './snake';
export declare class Apple implements ISprite {
  position: IPosition;
  color: string;
  size: number;
  constructor(canvas: HTMLCanvasElement, snake: Snake);
  private GeneratePosition;
  private TouchWithSnake;
  Update(): void;
  Draw(canvasContext: CanvasRenderingContext2D): void;
}
