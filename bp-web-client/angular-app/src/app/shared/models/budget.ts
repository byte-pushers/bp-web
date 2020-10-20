export interface Budget {
  getMin(): number;
  setMin(min: number): void;

  getMax(): number;
  setMax(max: number): void;
}
