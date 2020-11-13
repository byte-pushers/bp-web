import {BaseEntity} from "./base.entity";

export interface TimeLine extends BaseEntity {
  getMinTimeline(): number;
  setMinTimeline(minTimeline: number): void;

  getMaxTimeline(): number;
  setMaxTimeline(maxTimeline: number): void;

  getIsMaxFinite(): boolean;
  setIsMaxFinite(isMaxFinite: boolean): void;
}
