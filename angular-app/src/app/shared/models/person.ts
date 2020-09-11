import {PersonDomain} from "./person.domain";
import {AddressDomain} from "./address.domain";

export class PersonDomainModel implements PersonDomain{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: AddressDomain;

  constructor(config: PersonDomain) {
    this.firstName = (config !== null && config !== undefined) ? config.firstName : undefined;
    this.lastName = (config !== null && config !== undefined) ? config.lastName : undefined;
    this.email = (config !== null && config !== undefined) ? config.email : undefined;
    this.phoneNumber = (config !== null && config !== undefined) ? config.phoneNumber : undefined;
    this.address = (config !== null && config !== undefined) ? config.address : undefined;
  }
}
