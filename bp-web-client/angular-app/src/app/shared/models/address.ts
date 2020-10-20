export interface Address {
  getStreet(): [string];
  setStreet(street: [string]): void;

  getCity(): string;
  setCity(city: string): void;

  getState(): string;
  setState(state: string): void;

  getZip() : string;
  setZip(zip: string): void;

  getCounty(): string;
  setCounty(county: string): void;
}
