import {TimeLine} from "./time-line";
import {BaseEntityModel} from "./base.entity.model";

export class TimeLineModel extends BaseEntityModel implements TimeLine {
  private _minTimeline: number;
  private _maxTimeline: number;
  private _isMaxFinite: boolean;
  static readonly DEFAULT_CONFIG: any = {
    minTimeline: null,
    maxTimeline: null,
    isMaxFinite: false
  };

  constructor(timelineConfig: any) {
    super(timelineConfig);
    this._minTimeline = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.minTimeline : null;
    this._maxTimeline = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.maxTimeline : null;
    this._isMaxFinite = (timelineConfig !== null && timelineConfig !== undefined) ? timelineConfig.isMaxFinite : null;
  }

  get maxTimeline() {
    return this._maxTimeline;
  }

  getMaxTimeline() {
    return this._maxTimeline;
  }

  set maxTimeline(maxTimeline: number) {
    this._maxTimeline = maxTimeline;
  }

  setMaxTimeline(maxTimeline: number) {
    this._maxTimeline = maxTimeline;
  }

  get minTimeline() {
    return this._minTimeline;
  }
  set minTimeline(minTimeline: number) {
    this._minTimeline = minTimeline;
  }
  getMinTimeline() {
    return this._minTimeline;
  }

  setMinTimeline(minTimeline: number) {
    this._minTimeline = minTimeline;
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
    if (this.maxTimeline >= 30) {
      this._isMaxFinite = true;
      this._isMaxFinite = isMaxFinite;
    }
  }
}
