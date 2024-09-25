import {BaseEntityModel} from './base.entity.model';
import {Phone} from './phone';

export class PhoneModel extends BaseEntityModel implements Phone {
  _number: number;
  _type: string;

  static readonly DEFAULT_CONFIG: any = {
    number: null,
    type: null
  };
  constructor(phoneModelConfig: any) {
    super(phoneModelConfig);
    this._number = (phoneModelConfig !== null && phoneModelConfig !== undefined) ? phoneModelConfig.number : null;
    this._type = (phoneModelConfig !== null && phoneModelConfig !== undefined) ? phoneModelConfig.type : null;

  }

  get number() {
    return this._number;
  }
  // tslint:disable-next-line:variable-name
  set number(number: number) {
    this._number = number;
  }
  getNumber(): number {
    return this._number;
  }
  // tslint:disable-next-line:variable-name
  setNumber(number: number): void {
    this._number = number;
  }

  get type() {
    return this._type;
  }
  set type(type: string) {
    this._type = type;
  }
  getType(): string {
    return this._type;
  }
  setType(type: string): void {
    this._type = type;
  }
}
