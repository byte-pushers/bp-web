import {Budget} from "./budget";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";

export class BudgetModel implements Budget{
  private _min: number;
  private _max: number;

  static readonly DEFAULT_CONFIG: BudgetModel = {
    min: null,
    max: null
  };

  constructor(private budgetConfig: BudgetModel) {
    this._min = null;
    this._max = null;
  }
  get max() {
    return this._max;
  }
  set max(max: number) {
    this._max = max;
  }

  get min() {
    return this._min;
  }

  set min(min: number) {
    this._min = min;
  }

}
