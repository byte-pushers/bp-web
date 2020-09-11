import {CompanyDomain} from "./company.domain";
import {BudgetDomain} from "./budget.domain";
import {TimeLineDomain} from "./time-line.domain";

export class CompanyDomainModel implements CompanyDomain{
  name: string;
  type: string;
  budget: BudgetDomain;
  url: string;
  businessType: string;
  timeline: TimeLineDomain;
  description: boolean;
  established: boolean;

  constructor(config: CompanyDomain) {
    this.name =  (config !== null && config !== undefined) ? config.name : undefined;
    this.type =  (config !== null && config !== undefined) ? config.type : undefined;
    this.budget =  (config !== null && config !== undefined) ? config.budget : undefined;
    this.url =  (config !== null && config !== undefined) ? config.url : undefined;
    this.businessType =  (config !== null && config !== undefined) ? config.businessType : undefined;
    this.timeline =  (config !== null && config !== undefined) ? config.timeline : undefined;
    this.description =  (config !== null && config !== undefined) ? config.description : undefined;
    this.established =  (config !== null && config !== undefined) ? config.established : undefined;
  }
}
