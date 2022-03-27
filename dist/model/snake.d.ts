import {IPosition, ISprite} from '../interface';
export declare class Snake implements ISprite {
  private movable;
  private speed;
  size: number;
  tail: IPosition[];
  direction: IPosition;
  constructor(x: number, y: number, size: number);
  Update(): void;
  private Move;
  private FrozenMovement;
  get Head(): IPosition;
  set Head(position: IPosition);
  Draw(canvasContext: CanvasRenderingContext2D): void;
  EventHandler(event: KeyboardEvent): void;
}
