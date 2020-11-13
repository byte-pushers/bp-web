import {Budget} from "./budget";
import {BaseEntityModel} from "./base.entity.model";

export class BudgetModel extends BaseEntityModel implements Budget {
  private _minBudget: number;
  private _maxBudget: number;
  private _isMaxFinite: boolean;

  static readonly DEFAULT_CONFIG: any = {
    minBudget: null,
    max: null,
    isMaxFinite: false
  };

  constructor(budgetConfig: any) {
    super(budgetConfig);
    this._minBudget = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.minBudget : null;
    this._maxBudget = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.maxBudget : null;
    this._isMaxFinite = (budgetConfig !== null && budgetConfig !== undefined) ? budgetConfig.isMaxFinite : null;
  }

  get maxBudget() {
    return this._maxBudget;
  }

  getMax() {
    return this._maxBudget;
  }

  set maxBudget(maxBudget: number) {
    this._maxBudget = maxBudget;
  }

  setMaxBudget(maxBudget: number) {
    this._maxBudget = maxBudget;
  }

  get minBudget() {
    return this._minBudget;
  }

  getMinBudget() {
    return this._minBudget;
  }

  set minBudget(minBudget: number) {
    this._minBudget = minBudget;
  }

  setMinBudget(minBudget: number) {
    this._minBudget = minBudget;
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
    if (this.maxBudget >= 90000) {
      this._isMaxFinite = true;
      this._isMaxFinite = isMaxFinite;
    }
  }

}
