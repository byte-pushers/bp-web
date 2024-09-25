import {BaseEntity} from "./base.entity";

export interface Phone extends BaseEntity {
  number: number;
  type: string;

  getNumber(): number;
  setNumber(number: number): void;

  getType(): string;
  setType(type: string): void;
}
