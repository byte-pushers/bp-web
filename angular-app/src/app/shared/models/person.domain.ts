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

  setFirstName(firstName: string) {
    this.firstName = firstName;
    return firstName;
  }

  getLastName() {
    return this.lastName
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
    return lastName;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
    return email;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
    return phoneNumber;
  }

getAddress() {
    return this.address;
}
  setAddress(address: Address) {
    this.address = address;
    return address;
}
}
