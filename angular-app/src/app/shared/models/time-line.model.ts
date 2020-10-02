import {TimeLine} from "./time-line";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";

export class TimeLineModel implements TimeLine {
  private _min: Date;
  private _max: Date;
  static readonly DEFAULT_CONFIG: any = {
    min: null,
    max: null
  };

  constructor(private timelineConfig: TimeLineModel) {
    this._min = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.min : null;
    this._max = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.max : null;

  }

  get max() {
    return this._max;
  }
  set max(max: Date) {
    this._max = max;
  }

  get min() {
    return this._min;
  }
  set min(min: Date) {
    this._min = min;
  }


}
