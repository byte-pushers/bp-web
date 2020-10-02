import {Company} from "./company";
import {TimeLine} from "./time-line";
import {Budget} from "./budget";
import {AddressModel} from "./address.model";
import {TimeLineModel} from "./time-line.model";
import {BudgetModel} from "./budget.model";

export class CompanyModel implements Company {
  private _name: string;
  private _type: string;
  private _budget: Budget;
  private _url: string;
  private _timeline: TimeLine;
  private _desc: string;
  private _est: boolean;

  static readonly DEFAULT_CONFIG: any = {
    name: null,
    type: null,
    budget: new BudgetModel(BudgetModel.DEFAULT_CONFIG),
    url: null,
    timeline: new TimeLineModel(TimeLineModel.DEFAULT_CONFIG),
    desc: null,
    est: null

  };
  constructor(private companyModelConfig: CompanyModel){
   this._name = null;
   this._type = null;
   this._budget = null;
   this._url = null;
   this._timeline = null;
   this._desc = null;
   this._est = null;
  };

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  getCompanyType() {
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

  get est() {
    return this._est;
  }

  set est(est: boolean) {
    this._est = false;
  }

  get url() {
    return this._url;
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

  get desc() {
    return this._desc;
  }

  set desc(desc: string) {
    this._desc = desc;
  }
}

