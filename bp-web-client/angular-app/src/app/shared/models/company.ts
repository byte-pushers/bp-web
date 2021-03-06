import {Budget} from './budget';
import {TimeLine} from './time-line';
import {BaseEntity} from './base.entity';

export interface Company extends BaseEntity {
  name: string;
  type: string;
  budget: Budget;
  url: string;
  timeline: TimeLine;
  establishedYear: number;
  foundation: string;

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

  isEstablishedCompany(): boolean;

  getEstablishedYear(): number;
  setEstablishedYear(establishedYear: number): void;

  getFoundation(): string;
  setFoundation(foundation: string): void;
}
