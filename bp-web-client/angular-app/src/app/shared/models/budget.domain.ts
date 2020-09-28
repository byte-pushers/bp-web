import {Budget} from "./budget";

export class BudgetDomain implements Budget{
  private min: number;
  private max: number;

  getMax() {
    return this.max;
  }
  setMax(max: number): void {
    this.max = max;
  }

  getMin() {
    return this.min;
  }

  setMin(min: number): void {
    this.min = min;
  }

}
