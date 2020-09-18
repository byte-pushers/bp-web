import {Budget} from "./budget";
import {TimeLine} from "./time-line";

export interface Company {
setCompanyName(companyName: string);
getCompanyName();
setCompanyType(companyType: string);
getCompanyType();
setCompanyBudget(companyBudget: Budget);
getCompanyBudget();
setCompanyURL(companyURL: string);
getCompanyURL();
setCompanyTimeline(companyTimeline: TimeLine);
getCompanyTimeline();
setCompanyDesc(companyDesc: string);
getCompanyDesc();
setCompanyEst(companyEst: boolean);
getCompanyEst();
}
