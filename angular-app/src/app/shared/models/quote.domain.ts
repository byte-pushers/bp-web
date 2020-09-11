import {PersonDomain} from "./person.domain";
import {CompanyDomain} from "./company.domain";

export interface QuoteDomain {
  contact: PersonDomain;
  company: CompanyDomain;
}
