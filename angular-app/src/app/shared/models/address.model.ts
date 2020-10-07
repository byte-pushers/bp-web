import {Address} from "./address";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";
import {BaseEntityModel} from "./base.entity.model";

export class AddressModel extends BaseEntityModel implements Address {
  private _street: [string];
  private _city: string;
  private _state: string;
  private _zip: string;
  private _county: string;

  static readonly DEFAULT_CONFIG: any = {
    street: [null],
    city: null,
    state: null,
    zip: null,
    county: null

  };

  constructor(private addressModelConfig: AddressModel) {
    super(addressModelConfig);
    this._street = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.street : null;
    this._city = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.city : null;
    this._state = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.state : null;
    this._zip = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.zip : null;
    this._county = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.county : null;
  };

  get street() {
    return this._street;
  }

  set street(street: [string]) {
    this._street = street;
  }


  get city() {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  get state() {
    return this._state;
  }

  set state(state: string) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }

  set zip(zip: string) {
    this._zip = zip;
  }

  get county() {
    return this._county;
  }

  set county(county: string) {
    this._county = county;
  }


}
