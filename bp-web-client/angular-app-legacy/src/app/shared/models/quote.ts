import {Person} from "./person";
import {Company} from "./company";
import {BaseEntity} from "./base.entity";

export interface Quote extends BaseEntity {
  contact: Person;
  company: Company;
  projectPlatform: string;
  projectType: string;
  description: string;

  getContact(): Person;
  setContact(person: Person): void;

  getCompany(): Company;
  setCompany(company: Company): void;

  getProjectPlatform(): string;
  setProjectPlatform(projectPlatform: string): void;

  getProjectType(): string;
  setProjectType(projectType: string): void;

  getDescription(): string;
  setDescription(description: string): void;
}
