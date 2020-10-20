import {Person} from "./person";
import {Company} from "./company";

export interface Quote {
  getContact(): Person;
  setContact(person: Person): void;

  getCompany(): Company;
  setCompany(company: Company): void;

}
