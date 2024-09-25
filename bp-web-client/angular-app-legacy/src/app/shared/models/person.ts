import {Address} from './address';
import {BaseEntity} from './base.entity';
import {Phone} from "./phone";

export interface Person extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  phone: Phone;

  getFirstName(): string;
  setFirstName(firstName: string): void;

  getLastName(): string;
  setLastName(lastName: string): void;

  getEmail(): string;
  setEmail(email: string): void;

  getAddress(): Address;
  setAddress(address: Address): void;

  getPhone(): Phone;
  setPhone(phone: Phone): void;
}
