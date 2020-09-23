import {Quote} from "./quote";
import {Person} from "./person";
import {Company} from "./company";

export class QuoteDomain implements Quote {
  private contact: Person;
  private company: Company;

  getContact() {
    return this.contact;
  }
  setContact(contact: Person): void {
    this.contact = contact;
  }

  getCompany() {
    return this.company;
  }
  setCompany(company: Company): void {
    this.company = company;
  }
}
