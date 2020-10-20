import {TimeLine} from "./time-line";
import {BaseEntityModel} from "./base.entity.model";

export class TimeLineModel extends BaseEntityModel implements TimeLine {
  private _min: Date;
  private _max: Date;
  static readonly DEFAULT_CONFIG: any = {
    _min: null,
    _max: null
  };

  constructor(private timelineConfig: TimeLineModel) {
    super(timelineConfig);
    this._min = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.min : null;
    this._max = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.max : null;

  }

  get max() {
    return this._max;
  }
  getMax() {
    return this._max;
  }
  set max(max: Date) {
    this._max = max;
  }
  setMax(max: Date) {
    this._max = max;
  }

  get min() {
    return this._min;
  }
  getMin() {
    return this._min;
  }
  set min(min: Date) {
    this._min = min;
  }
  setMin(min: Date) {
    this._min = min;
  }


}
