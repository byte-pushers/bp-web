import {TimeLine} from "./time-line";

export class TimeLineDomain implements TimeLine {
  private min: Date;
  private max: Date;

  getTimelineMax() {
    return this.max;
  }
  setTimelineMax(max: Date) {
    this.max = max;
    return max;
  }

  getTimelineMin() {
    return this.min;
  }
  setTimelineMin(min: Date) {
    this.min = min;
    return min;
  }


}
