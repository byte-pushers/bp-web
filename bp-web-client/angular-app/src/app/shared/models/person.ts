import {Address} from "./address";
import {BaseEntity} from "./base.entity";

export interface Person extends BaseEntity {
  getFirstName(): string;
  setFirstName(firstName: string): void;

  getLastName(): string;
  setLastName(lastName: string): void;

  getEmail(): string;
  setEmail(email: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(phoneNumber: string): void;

  getAddress(): Address;
  setAddress(address: Address): void;
}
