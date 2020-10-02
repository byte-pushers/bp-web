import {Address} from "./address";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";

export class AddressModel implements Address {
  private _street: [string];
  private _city: string;
  private _state: string;
  private _zip: string;
  private _county: string;

  static readonly DEFAULT_CONFIG: AddressModel = {
    street: [null],
    city: null,
    state: null,
    zip: null,
    county: null

  };

  constructor(private addressModelConfig: AddressModel) {
    this._street = null;
    this._city = null;
    this._state = null;
    this._zip = null;
    this._county = null;
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
