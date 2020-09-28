import {Person} from "./person";
import {Address} from "./address";

export class PersonDomain implements Person {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private address: Address;

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

getAddress() {
    return this.address;
}
  setAddress(address: Address): void {
    this.address = address;
}
}
