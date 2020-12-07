import {BaseEntity} from "./base.entity";

export interface Budget extends BaseEntity {
  getMinBudget(): number;
  setMinBudget(min: number): void;

  getMaxBudget(): number;
  setMaxBudget(max: number): void;

  getIsMaxFinite(): boolean;
  setIsMaxFinite(isMaxFinite: boolean): void;
}
