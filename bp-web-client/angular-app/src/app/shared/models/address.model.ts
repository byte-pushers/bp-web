import {Address} from './address';
import {BaseEntityModel} from './base.entity.model';

export class AddressModel extends BaseEntityModel implements Address {

  private _street: [string];
  private _city: string;
  private _state: string;
  private _zip: string;
  private _county: string;
  private _country: string;

  static readonly DEFAULT_CONFIG: any = {
    id: null,
    street: [null],
    city: null,
    state: null,
    zip: null,
    county: null,
    country: null
  };

  constructor(addressModelConfig: any) {
    super(addressModelConfig);
    this._street = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.street : null;
    this._city = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.city : null;
    this._state = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.state : null;
    this._zip = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.zip : null;
    this._county = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.county : null;
    this._country = (addressModelConfig !== null && addressModelConfig !== undefined) ? addressModelConfig.country : null;
  }

  get street() {
    return this._street;
  }

  getStreet(): [string] {
    return this._street;
  }

  set street(street: [string]) {
    this._street = street;
  }

  setStreet(street: [string]): void {
    this._street = street;
  }

  get city() {
    return this._city;
  }

  getCity(): string {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  setCity(city: string) {
    this._city = city;
  }

  get state() {
    return this._state;
  }
  set state(state: string) {
    this._state = state;
  }
  getState() {
    return this._state;
  }

  setState(state: string) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }
  set zip(zip: string) {
    this._zip = zip;
  }
  getZip() {
    return this._zip;
  }
  setZip(zip: string) {
    this._zip = zip;
  }

  get county() {
    return this._county;
  }
  set county(county: string) {
    this._county = county;
  }
  getCounty() {
    return this._county;
  }
  setCounty(county: string) {
    this._county = county;
  }

  get country() {
    return this._country;
  }
  set country(country: string) {
    this._county = country;
  }
  getCountry() {
    return this._country;
  }
  setCountry(country: string) {
    this._country = country;
  }
}
