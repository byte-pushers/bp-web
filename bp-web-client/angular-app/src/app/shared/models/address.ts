import { BaseEntity } from "./base.entity";

export interface Address extends BaseEntity {
  street: [string];
  city: string;
  state: string;
  zip: string;
  county: string;
  country: string;

  getStreet(): [string];
  setStreet(street: [string]): void;

  getCity(): string;
  setCity(city: string): void;

  getState(): string;
  setState(state: string): void;

  getZip(): string;
  setZip(zip: string): void;

  getCounty(): string;
  setCounty(county: string): void;

  getCountry(): string;
  setCountry(country: string): void;
}
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
