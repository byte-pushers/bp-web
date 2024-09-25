import {Quote} from "./quote";
import {Person} from "./person";
import {Company} from "./company";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";
import {BaseEntityModel} from "./base.entity.model";
import {Address} from "./address";

export class QuoteModel extends BaseEntityModel implements Quote {
  // tslint:disable-next-line:variable-name
  private _contact: Person;
  // tslint:disable-next-line:variable-name
  private _company: Company;
  // tslint:disable-next-line:variable-name
  private _projectPlatform: string;
  // tslint:disable-next-line:variable-name
  private _projectType: string;
  private _address: Address;
  private _description: string;



  static readonly DEFAULT_CONFIG: any = {
    id: null,
    contact: PersonModel.DEFAULT_CONFIG,
    company: CompanyModel.DEFAULT_CONFIG,
    projectPlatform: null,
    projectType: null
  };

  constructor(quoteConfig: any) {
    super(quoteConfig);
    this._projectPlatform = (quoteConfig !== null && quoteConfig !== undefined) ? quoteConfig.projectPlatform : null;
    this._projectType = (quoteConfig !== null && quoteConfig !== undefined) ? quoteConfig.projectType : null;
    this._contact = (quoteConfig !== null && quoteConfig !== undefined) ? new PersonModel(quoteConfig.contact) : null;
    this._company = (quoteConfig !== null && quoteConfig !== undefined) ? new CompanyModel(quoteConfig.company) : null;
    this._description = (quoteConfig !== null && quoteConfig !== undefined) ? quoteConfig.description : null;
  }
  getProjectPlatform() {
    return this._projectPlatform;
  }
  get projectPlatform() {
    return this._projectPlatform;
  }
  set projectPlatform(projectPlatform: string) {
    this._projectPlatform = projectPlatform;
  }
  setProjectPlatform(projectPlatform: string) {
    this._projectPlatform = projectPlatform;
  }
  getProjectType() {
    return this._projectType;
  }
  get projectType() {
    return this._projectType;
  }
  set projectType(projectType: string) {
    this._projectType = projectType;
  }
  setProjectType(projectType: string) {
    this._projectType = projectType;
  }

  get contact() {
    return this._contact;
  }
  set contact(contact: Person) {
    this._contact = contact;
  }
  getContact() {
    return this._contact;
  }

  setContact(contact: Person) {
    this._contact = contact;
  }

  get company() {
    return this._company;
  }
  set company(company: Company) {
    this._company = company;
  }
  getCompany() {
    return this._company;
  }

  setCompany(company: Company) {
    this._company = company;
  }

  get address() {
    return this._address;
  }
  set address(address: Address) {
    this._address = address;
  }
  getAddress() {
    return this._address;
  }
  setAddress(address: Address) {
    this._address = address;
  }

  get description() {
    return this._description;
  }

  set description(desc: string) {
    this._description = desc;
  }

  getDescription() {
    return this._description;
  }

  setDescription(description: string) {
    this._description = description;
  }

}
