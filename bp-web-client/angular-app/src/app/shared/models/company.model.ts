import {Company} from "./company";
import {TimeLine} from "./time-line";
import {Budget} from "./budget";
import {AddressModel} from "./address.model";
import {TimeLineModel} from "./time-line.model";
import {BudgetModel} from "./budget.model";
import {BaseEntityModel} from "./base.entity.model";

export class CompanyModel extends BaseEntityModel implements Company {
  private _name: string;
  private _type: string;
  private _budget: Budget;
  private _url: string;
  private _timeline: TimeLine;
  private _desc: string;
  private _est: boolean;

  static readonly DEFAULT_CONFIG: any = {
    id: null,
    name: null,
    type: null,
    budget: BudgetModel.DEFAULT_CONFIG,
    url: null,
    timeline: TimeLineModel.DEFAULT_CONFIG,
    desc: null,
    est: false
  };
  constructor(private companyModelConfig: CompanyModel) {
    super(companyModelConfig);
   this._name = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.name : null;
   this._type = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.type :  null;
   this._budget = (companyModelConfig !== null && companyModelConfig !== undefined) ? new BudgetModel(companyModelConfig.budget) : null;
   this._url = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.url : null;
   this._timeline = (companyModelConfig !== null && companyModelConfig !== undefined) ? new TimeLineModel(companyModelConfig.timeline) : null;
   this._desc = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.desc : null;
   this._est = (companyModelConfig !== null && companyModelConfig !== undefined) ? companyModelConfig.est : null;
  };

  get name() {
    return this._name;
  }

  getName() {
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

  getType() {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
  }

  setType(type: string) {
    this._type = type;
  }

  get budget() {
    return this._budget;
  }

  getBudget() {
    return this._budget;
  }

  set budget(budget: Budget) {
    this._budget = budget;
  }

  setBudget(budget: Budget) {
    this._budget = budget;
  }

  get est() {
    return this._est;
  }

  isEstablishedCompany() {
    return this._est;
  }

  set est(est: boolean) {
    this._est = est;
  }

  setEstablishedCompany(establishedCompany: boolean) {
    this._est = establishedCompany;
  }

  get url() {
    return this._url;
  }

  getUrl() {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  setUrl(url: string) {
    this._url = url;
  }

  get timeline() {
    return this._timeline;
  }

  getTimeline() {
    return this._timeline;
  }

  set timeline(timeline: TimeLine) {
    this._timeline = timeline;

  }

  setTimeline(timeline: TimeLine) {
    this._timeline = timeline;

  }

  get desc() {
    return this._desc;
  }

  getDescription() {
    return this._desc;
  }

  set desc(desc: string) {
    this._desc = desc;
  }

  setDescription(description: string) {
    this._desc = description;
  }
}

