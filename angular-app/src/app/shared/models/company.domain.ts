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
  setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  getCompanyType() {
    return this.companyType;
  }
  setCompanyType(companyType: string): void {
    this.companyType = companyType;
  }

  getCompanyBudget() {
    return this.companyBudget;
  }
  setCompanyBudget(companyBudget: Budget): void {
    this.companyBudget = companyBudget;
  }

  getCompanyEst() {
    return this.companyEst;
  }
  setCompanyEst(companyEst: boolean): void {
    this.companyEst = false;
  }

  getCompanyURL() {
    return this.companyURL;
  }
  setCompanyURL(companyURL: string): void {
    this.companyURL = companyURL;
  }

  getCompanyTimeline() {
    return this.companyTimeline;
  }
  setCompanyTimeline(companyTimeline: TimeLine): void {
    this.companyTimeline = companyTimeline;

  }

  getCompanyDesc() {
    return this.companyDesc;
  }
  setCompanyDesc(companyDesc: string): void {
    this.companyDesc = companyDesc;
  }
}
