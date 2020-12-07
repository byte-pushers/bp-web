import {TimeLine} from "./time-line";
import {BaseEntityModel} from "./base.entity.model";

export class TimeLineModel extends BaseEntityModel implements TimeLine {
  private _min: number;
  private _max: number;
  private _isMaxFinite: boolean;
  static readonly DEFAULT_CONFIG: any = {
    min: null,
    max: null,
    isMaxFinite: false
  };

  constructor(timelineConfig: any) {
    super(timelineConfig);
    this._min = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.min : null;
    this._max = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.max : null;
    this._isMaxFinite = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.isMaxFinite : null;
  }

  get max() {
    return this._max;
  }

  getMaxTimeline() {
    return this._max;
  }

  set max(max: number) {
    this._max = max;
  }

  setMaxTimeline(max: number) {
    this._max = max;
  }

  get min() {
    return this._min;
  }
  set min(min: number) {
    this._min = min;
  }
  getMinTimeline() {
    return this._min;
  }

  setMinTimeline(min: number) {
    this._min = min;
  }
  get isMaxFinite() {
    return this._isMaxFinite;
  }
  set isMaxFinite(isMaxFinite: boolean) {
    this._isMaxFinite = isMaxFinite;
  }

  getIsMaxFinite() {
    return this._isMaxFinite;
  }
  setIsMaxFinite(isMaxFinite: boolean) {
    if (this.max >= 30) {
      this._isMaxFinite = true;
      this._isMaxFinite = isMaxFinite;
    }
  }
}
