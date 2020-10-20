import {BaseEntity} from "./base.entity";

export class BaseEntityModel implements BaseEntity {

  private _id: number;

  constructor(private baseEntityModelConfig: BaseEntityModel) {
    this.id = (baseEntityModelConfig !== null && baseEntityModelConfig !== undefined) ? baseEntityModelConfig.id : null;
  };

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  getId(): number {
    return this._id;
  }

  setId(id: number): void {
    this._id = id;
  }
}
