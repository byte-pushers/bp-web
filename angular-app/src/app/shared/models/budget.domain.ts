import {Budget} from "./budget";

export class BudgetDomain implements Budget{
  private min: number;
  private max: number;

  getMax() {
    return this.max;
  }
  setMax(max: number) {
    this.max = max;
    return max;
  }

  getMin() {
    return this.min;
  }

  setMin(min: number) {
    this.min = min;
    return min;
  }

}
