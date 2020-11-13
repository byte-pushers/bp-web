import {BaseEntity} from "./base.entity";

export interface Budget extends BaseEntity {
  getMinBudget(): number;
  setMinBudget(minBudget: number): void;

  getMax(): number;
  setMaxBudget(maxBudget: number): void;

  getIsMaxFinite(): boolean;
  setIsMaxFinite(isMaxFinite: boolean): void;
}
