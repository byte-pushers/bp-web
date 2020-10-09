import {Budget} from "./budget";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";
import {BaseEntityModel} from "./base.entity.model";

export class BudgetModel extends BaseEntityModel implements Budget{
  private _min: number;
  private _max: number;

  static readonly DEFAULT_CONFIG: any = {
    min: null,
    max: null
  };

  constructor(private budgetConfig: BudgetModel) {
    super(budgetConfig);
    this._min = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.min : null;
    this._max = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.max : null;
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
