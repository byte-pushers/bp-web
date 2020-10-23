import {Person} from "./person";
import {Company} from "./company";
import {BaseEntity} from "./base.entity";

export interface Quote extends BaseEntity {
  getContact(): Person;
  setContact(person: Person): void;

  getCompany(): Company;
  setCompany(company: Company): void;

}
