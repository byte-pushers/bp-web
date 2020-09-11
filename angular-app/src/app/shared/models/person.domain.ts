import {AddressDomain} from "./address.domain";

export interface PersonDomain {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: AddressDomain;
}
