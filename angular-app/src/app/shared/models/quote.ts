import {Person} from "./person";
import {Company} from "./company";

export interface Quote {
  setContact(contact: Person);
  getContact();
  setCompany(company: Company);
  getCompany();
}
