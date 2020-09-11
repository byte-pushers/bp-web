import {AddressDomain} from "./address.domain";

export class AddressDomainModel implements AddressDomain {
  public street: string;
  public city: string;
  public state: string;
  public zip: string;
  public county: string;

constructor(config: AddressDomain) {
  this.street = (config !== null && config !== undefined) ? config.street : undefined;
  this.city = (config !== null && config !== undefined) ? config.city : undefined;
  this.state = (config !== null && config !== undefined) ? config.state : undefined;
  this.zip = (config !== null && config !== undefined) ? config.zip : undefined;
  this.county = (config !== null && config !== undefined) ? config.county : undefined;
}
}
