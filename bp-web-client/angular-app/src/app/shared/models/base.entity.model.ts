import {BaseEntity} from "./base.entity";

export class BaseEntityModel implements BaseEntity {
  private _id: number;

  constructor(baseEntityModelConfig: any) {
    this.id = (baseEntityModelConfig !== null && baseEntityModelConfig !== undefined) ? baseEntityModelConfig.id : null;
  };

  get id() {
    return this._id;
  }

  getId(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  setId(id: number): void {
    this._id = id;
  }

  public transformKeys(): any {
    const self = this;
    return Object.keys(this).reduce((o, prop) => {
      const value = ((typeof self[prop] === 'object' && self[prop] !== null)
        && self[prop].hasOwnProperty('transformKeys')) ? self[prop].transformKeys() : self[prop];
      const newProp = prop.replace('_', '');
      o[newProp] = value;
      return o;
    }, {});
  }
}
