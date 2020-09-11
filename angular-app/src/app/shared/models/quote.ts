import {QuoteDomain} from "./quote.domain";
import {PersonDomain} from "./person.domain";
import {CompanyDomain} from "./company.domain";

export class QuoteDomainModel implements QuoteDomain {
  contact: PersonDomain;
  company: CompanyDomain;

  constructor(config: QuoteDomain) {
    this.contact = (config !== null && config !== undefined) ? config.contact : undefined;
    this.company = (config !== null && config !== undefined) ? config.company : undefined;

  }
}
