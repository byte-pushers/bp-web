import {Budget} from "./budget";
import {TimeLine} from "./time-line";
import {BaseEntity} from "./base.entity";

export interface Company extends BaseEntity {
  getName(): string;
  setName(name: string): void;

  getType(): string;
  setType(type: string): void;

  getBudget(): Budget;
  setBudget(budget: Budget): void;

  getUrl(): string;
  setUrl(url: string): void;

  getTimeline(): TimeLine;
  setTimeline(timeLine: TimeLine): void;

  getDescription(): string;
  setDescription(description: string): void;

  isEstablishedCompany(): boolean;
  setEstablishedCompany(establishedCompany: boolean): void;
}
