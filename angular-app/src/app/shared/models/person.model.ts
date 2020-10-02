import {Person} from "./person";
import {Address} from "./address";
import {CompanyModel} from "./company.model";
import {AddressModel} from "./address.model";

export class PersonModel extends AddressModel implements Person {

  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _address: Address;

  static readonly DEFAULT_CONFIG: PersonModel = {
   firstName: null,
   lastName: null,
    email: null,
   phoneNumber: null,
   address: new AddressModel(AddressModel.DEFAULT_CONFIG)
  };
  constructor(private personModelConfig: PersonModel){
    super(personModelConfig);
    this._firstName = null;
    this._lastName = null;
    this._email = null;
    this._phoneNumber = null;
    this._address = null;
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
