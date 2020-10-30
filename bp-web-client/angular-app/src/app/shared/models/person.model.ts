import {Person} from './person';
import {Address} from './address';
import {CompanyModel} from './company.model';
import {AddressModel} from './address.model';
import {BaseEntityModel} from './base.entity.model';
import {PhoneModel} from './phone.model';
import {Phone} from './phone';

export class PersonModel extends BaseEntityModel implements Person {

  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _address: Address;
  private _phone: Phone;

  static readonly DEFAULT_CONFIG: any = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: PhoneModel.DEFAULT_CONFIG,
    address: AddressModel.DEFAULT_CONFIG
  };

  constructor(personModelConfig: any) {
    super(personModelConfig);
    this._firstName = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.firstName : null;
    this._lastName = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.lastName : null;
    this._email = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.email : null;
    this._phone = (personModelConfig !== null && personModelConfig !== undefined) ? new PhoneModel(personModelConfig.phone) : null;
    this._address = (personModelConfig !== null && personModelConfig !== undefined) ? new AddressModel(personModelConfig.address) : null;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  getFirstName() {
    return this._firstName;
  }
  setFirstName(firstName: string) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }
  getLastName() {
    return this._lastName;
  }
  setLastName(lastName: string) {
    this._lastName = lastName;
  }

  get email() {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }
  getEmail() {
    return this._email;
  }
  setEmail(email: string) {
    this._email = email;
  }

  get phone() {
    return this._phone;
  }
  getPhone() {
    return this._phone;
  }

  set phoneNumber(phone: Phone) {
    this._phone = phone;
  }
  setPhone(phone: Phone) {
    this._phone = phone;
  }

  get address() {
    return this._address;
  }
  set address(address: Address) {
    this._address = address;
  }
  getAddress() {
    return this._address;
  }
  setAddress(address: Address) {
    this._address = address;
  }
}
