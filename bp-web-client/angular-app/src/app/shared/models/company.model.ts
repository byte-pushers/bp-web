import {Company} from './company';
import {TimeLine} from './time-line';
import {Budget} from './budget';
import {TimeLineModel} from './time-line.model';
import {BudgetModel} from './budget.model';
import {BaseEntityModel} from './base.entity.model';
import {getFullYear} from "ngx-bootstrap";

export class CompanyModel extends BaseEntityModel implements Company {
  static readonly DEFAULT_CONFIG: any = {
    id: null,
    name: null,
    type: null,
    budget: BudgetModel.DEFAULT_CONFIG,
    url: null,
    timeline: TimeLineModel.DEFAULT_CONFIG,
    description: null,
    establishedYear: null,
    isEstablished: false
  };
  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _type: string;
  // tslint:disable-next-line:variable-name
  private _budget: Budget;
  // tslint:disable-next-line:variable-name
  private _url: string;
  // tslint:disable-next-line:variable-name
  private _timeline: TimeLine;
  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _establishedYear: number;
  // tslint:disable-next-line:variable-name
  private _isEstablished: boolean;

  constructor(companyModelConfig: any) {
    super(companyModelConfig);
    this._name = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.name : null;
    this._type = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.type :  null;
    this._budget = (companyModelConfig !== null && companyModelConfig !== undefined) ? new BudgetModel(companyModelConfig.budget) : null;
    this._url = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.url : null;
    this._timeline = (companyModelConfig !== null && companyModelConfig !== undefined) ? new TimeLineModel(companyModelConfig.timeline) : null;
    this._description = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.description : null;
    this._establishedYear = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.establishedYear : null;
    this._isEstablished = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.isEstablished : null;
      }

  getName() {
    return this._name;
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  setName(name: string) {
    this._name = name;
  }

  get Type() {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
  }

  get budget() {
    return this._budget;
  }

  set budget(budget: Budget) {
    this._budget = budget;
  }

  getEstablishedYear(): number {
    return this._establishedYear;
  }

  get establishedYear() {
    return this._establishedYear;
  }

  set establishedYear(establishedYear: number) {
    this._establishedYear = establishedYear;
  }

  setEstablishedYear(establishedYear: number): void {
    this._establishedYear = establishedYear;
  }

  isEstablishedCompany(): boolean {
    // TODO add check for establishedYear(number) that will see if company is established, then if company exceeds minimum of 5 years return true
    // TODO add logic that determines if establishedYear is less or equal to 5 years from todays date. If true return true otherwise return false.
const year = new Date().getFullYear();
if (this.establishedYear <= year - 5 ) {
      return true;
    } else {
      return false;
    }

  }

  set url(url: string) {
    this._url = url;
  }

  get timeline() {
    return this._timeline;
  }

  set timeline(timeline: TimeLine) {
    this._timeline = timeline;

  }

  get description() {
    return this._description;
  }

  set description(desc: string) {
    this._description = desc;
  }

  getType() {
    return this._type;
  }

  setType(type: string) {
    this._type = type;
  }

  getBudget() {
    return this._budget;
  }

  setBudget(budget: Budget) {
    this._budget = budget;
  }

  getUrl() {
    return this._url;
  }

  setUrl(url: string) {
    this._url = url;
  }

  getTimeline() {
    return this._timeline;
  }

  setTimeline(timeline: TimeLine) {
    this._timeline = timeline;

  }

  getDescription() {
    return this._description;
  }

  setDescription(description: string) {
    this._description = description;
  }

}

