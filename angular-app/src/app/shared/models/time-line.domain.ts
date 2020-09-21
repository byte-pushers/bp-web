import {TimeLine} from "./time-line";

export class TimeLineDomain implements TimeLine {
  private min: Date;
  private max: Date;

  getTimelineMax() {
    return this.max;
  }
  setTimelineMax(max: Date): void {
    this.max = max;
  }

  getTimelineMin() {
    return this.min;
  }
  setTimelineMin(min: Date): void {
    this.min = min;
  }


}
