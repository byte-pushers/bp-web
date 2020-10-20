import {BaseEntity} from "./base.entity";

export interface TimeLine extends BaseEntity {
  getMin(): Date;
  setMin(min: Date): void;

  getMax(): Date;
  setMax(max: Date): void;
}
