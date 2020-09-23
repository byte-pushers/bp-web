import {Budget} from "./budget";
import {TimeLine} from "./time-line";

export interface Company {
setCompanyName(companyName: string): void;
getCompanyName();
setCompanyType(companyType: string): void;
getCompanyType();
setCompanyBudget(companyBudget: Budget): void;
getCompanyBudget();
setCompanyURL(companyURL: string): void;
getCompanyURL();
setCompanyTimeline(companyTimeline: TimeLine): void;
getCompanyTimeline();
setCompanyDesc(companyDesc: string): void;
getCompanyDesc();
setCompanyEst(companyEst: boolean): void;
getCompanyEst();
}
