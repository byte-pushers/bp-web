import {BudgetDomain} from "./budget.domain";

export class BudgetDomainModel implements BudgetDomain {
  public min: number;
  public max: number;

  constructor(config: BudgetDomain) {
    this.max = (config !== null && config !== undefined) ? config.max : undefined;
    this.min = (config !== null && config !== undefined) ? config.min : undefined;

  }
}
