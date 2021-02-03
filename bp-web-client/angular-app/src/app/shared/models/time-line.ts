import {BaseEntity} from "./base.entity";

export interface TimeLine extends BaseEntity {
  min: number;
  max: number;
  isMaxFinite: boolean;

  getMinTimeline(): number;
  setMinTimeline(min: number): void;

  getMaxTimeline(): number;
  setMaxTimeline(max: number): void;

  getIsMaxFinite(): boolean;
  setIsMaxFinite(isMaxFinite: boolean): void;
}
