export interface TimeLine {
  getMin(): Date;
  setMin(min: Date): void;

  getMax(): Date;
  setMax(max: Date): void;
}
