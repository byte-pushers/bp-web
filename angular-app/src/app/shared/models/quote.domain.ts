import {Quote} from "./quote";
import {Person} from "./person";
import {Company} from "./company";

export class QuoteDomain implements Quote {
  private contact: Person;
  private company: Company;

  getContact() {
    return this.contact;
  }
  setContact(contact: Person) {
    this.contact = contact;
    return contact;
  }

  getCompany() {
    return this.company;
  }
  setCompany(company: Company) {
    this.company = company;
    return company;
  }
}
