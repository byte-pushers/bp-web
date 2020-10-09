import {Person} from "./person";
import {Address} from "./address";
import {CompanyModel} from "./company.model";
import {AddressModel} from "./address.model";
import {BaseEntityModel} from "./base.entity.model";

export class PersonModel extends BaseEntityModel implements Person {

  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _address: Address;

  static readonly DEFAULT_CONFIG: any = {
    id: null,
   firstName: null,
   lastName: null,
    email: null,
   phoneNumber: null,
   address: new AddressModel(AddressModel.DEFAULT_CONFIG)
  };
  constructor(private personModelConfig: PersonModel){
    super(personModelConfig);
    this._firstName = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.firstName: null;
    this._lastName = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.lastName: null;
    this._email = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.email: null;
    this._phoneNumber = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.phoneNumber: null;
    this._address = (personModelConfig !== null && personModelConfig !== undefined) ? personModelConfig.address: null;
  };

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get email() {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }

get address() {
    return this._address;
}
  set address(address: Address) {
    this._address = address;
}
}