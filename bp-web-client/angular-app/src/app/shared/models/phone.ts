import {BaseEntity} from "./base.entity";

export interface Phone extends BaseEntity{
  getNumber(): string;
  setNumber(number: string): void;

  getType(): string;
  setType(type: string): void;
}
