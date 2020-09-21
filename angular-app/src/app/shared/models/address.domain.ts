import {Address} from "./address";

export class AddressDomain implements Address {
  private street: [string];
  private city: string;
  private state: string;
  private zip: string;
  private county: string;

  getStreet() {
    return this.street;
  }
  setStreet(street: [string]): void {
    this.street = street;
  }


  getCity() {
    return this.city;
  }

  setCity(city: string): void {
    this.city = city;
  }

  getState() {
    return this.state;
  }
  setState(state: string): void {
    this.state = state;
  }

  getZip() {
    return this.zip;
  }
  setZip(zip: string): void {
    this.zip = zip;
  }

  getCounty() {
    return this.county
  }
  setCounty(county: string): void {
    this.county = county;
  }


}
