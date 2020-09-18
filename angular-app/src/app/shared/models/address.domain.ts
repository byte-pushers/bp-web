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
  setStreet(street: [string]) {
    this.street = street;
    return street;
  }


  getCity() {
    return this.city;
  }

  setCity(city: string) {
    this.city = city;
    return city;
  }

  getState() {
    return this.state;
  }
  setState(state: string) {
    this.state = state;
    return state;
  }

  getZip() {
    return this.zip;
  }
  setZip(zip: string) {
    this.zip = zip;
  }

  getCounty() {
    return this.county
  }
  setCounty(county: string) {
    this.county = county;
    return county;
  }


}
