import {Budget} from "./budget";
import {BaseEntityModel} from "./base.entity.model";

export class BudgetModel extends BaseEntityModel implements Budget {
  private _min: number;
  private _max: number;
  private _isMaxFinite: boolean;

  static readonly DEFAULT_CONFIG: any = {
    min: null,
    max: null,
    isMaxFinite: false
  };

  constructor(budgetConfig: any) {
    super(budgetConfig);
    this._min = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.min : null;
    this._max = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.max : null;
    this._isMaxFinite = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.isMaxFinite : null;
  }

  get max() {
    return this._max;
  }

  getMaxBudget() {
    return this._max;
  }

  set max(max: number) {
    this._max = max;
  }

  setMaxBudget(max: number) {
    this._max = max;
  }

  get min() {
    return this._min;
  }

  getMinBudget() {
    return this._min;
  }

  set min(min: number) {
    this._min = min;
  }

  setMinBudget(min: number) {
    this._min = min;
  }

  get isMaxFinite() {
    return this._isMaxFinite;
  }
  set isMaxFinite(isMaxFinite: boolean) {
    this._isMaxFinite = isMaxFinite;
  }

  getIsMaxFinite() {
    return this._isMaxFinite;
  }
  setIsMaxFinite(isMaxFinite: boolean) {
    if (this.max >= 90000) {
      this._isMaxFinite = true;
      this._isMaxFinite = isMaxFinite;
    }
  }

}
