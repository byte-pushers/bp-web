import {TimeLineDomain} from "./time-line.domain";

export class TimeLineDomainModel implements TimeLineDomain{
  min: Date;
  max: Date;

  constructor(config: TimeLineDomain ) {
    this.min = (config !== null && config !== undefined) ? config.min : undefined;
    this.max = (config !== null && config !== undefined) ? config.max : undefined;

  }
}
