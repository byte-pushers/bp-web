import {BaseEntity} from "./base.entity";

export interface Budget extends BaseEntity {
  getMin(): number;
  setMin(min: number): void;

  getMax(): number;
  setMax(max: number): void;
}
