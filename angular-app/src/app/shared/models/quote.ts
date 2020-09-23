import {Person} from "./person";
import {Company} from "./company";

export interface Quote {
  setContact(contact: Person): void;
  getContact();
  setCompany(company: Company): void;
  getCompany();
}
