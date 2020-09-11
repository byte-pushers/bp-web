import {BudgetDomain} from "./budget.domain";
import {TimeLineDomain} from "./time-line.domain";

export interface CompanyDomain {
  name: string;
  type: string;
  budget: BudgetDomain;
  url: string;
  businessType: string;
  timeline: TimeLineDomain;
  description: boolean;
  established: boolean;

}
