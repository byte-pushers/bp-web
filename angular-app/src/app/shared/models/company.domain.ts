import {Company} from "./company";
import {TimeLine} from "./time-line";
import {Budget} from "./budget";

export class CompanyDomain implements Company{
  private companyName: string;
  private companyType: string;
  private companyBudget: Budget;
  private companyURL: string;
  private companyTimeline: TimeLine;
  private companyDesc: string;
  private companyEst: boolean;

  getCompanyName() {
    return this.companyName
  }
  setCompanyName(companyName: string) {
    this.companyName = companyName;
    return companyName;
  }

  getCompanyType() {
    return this.companyType;
  }
  setCompanyType(companyType: string) {
    this.companyType = companyType;
    return companyType;
  }

  getCompanyBudget() {
    return this.companyBudget;
  }
  setCompanyBudget(companyBudget: Budget) {
    this.companyBudget = companyBudget;
    return this.companyBudget;
  }

  getCompanyEst() {
    return this.companyEst;
  }
  setCompanyEst(companyEst: boolean) {
    this.companyEst = false;
    return companyEst;
  }

  getCompanyURL() {
    return this.companyURL;
  }
  setCompanyURL(companyURL: string) {
    this.companyURL = companyURL;
    return companyURL;
  }

  getCompanyTimeline() {
    return this.companyTimeline;
  }
  setCompanyTimeline(companyTimeline: TimeLine) {
    this.companyTimeline = companyTimeline;
    return companyTimeline;
  }

  getCompanyDesc() {
    return this.companyDesc;
  }
  setCompanyDesc(companyDesc: string) {
    this.companyDesc = companyDesc;
    return this.companyDesc;
  }
}
