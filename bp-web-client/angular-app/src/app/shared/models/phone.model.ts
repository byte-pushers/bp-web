import {BaseEntityModel} from './base.entity.model';
import {Phone} from './phone';

export class PhoneModel extends BaseEntityModel implements Phone {
  _number: string;
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

  get Number() {
    return this._number;
  }
  set Number(number: string) {
    this._number = number;
  }
  getNumber(): string {
    return this._number;
  }
  setNumber(number: string): void {
    this._number = number;
  }

  get Type() {
    return this._type;
  }
  set Type(type: string) {
    this._type = type;
  }
  getType(): string {
    return this._type;
  }
  setType(type: string): void {
    this._type = type;
  }
}
