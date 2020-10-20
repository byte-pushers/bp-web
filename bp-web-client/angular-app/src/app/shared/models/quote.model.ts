import {Quote} from "./quote";
import {Person} from "./person";
import {Company} from "./company";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";
import {BaseEntityModel} from "./base.entity.model";

export class QuoteModel extends BaseEntityModel implements Quote {
  private _contact: Person;
  private _company: Company;

  static readonly DEFAULT_CONFIG: any = {
    id: null,
    contact: PersonModel.DEFAULT_CONFIG,
    company: CompanyModel.DEFAULT_CONFIG
  };

  constructor(private quoteConfig: QuoteModel) {
    super(quoteConfig);
    this._contact = (quoteConfig !== null && quoteConfig !== undefined) ? new PersonModel(quoteConfig.contact) : null;
    this._company = (quoteConfig !== null && quoteConfig !== undefined) ? new CompanyModel(quoteConfig.company) : null;
  }

  get contact() {
    return this._contact;
  }

  set contact(contact: Person) {
    this._contact = contact;
  }

  get company() {
    return this._company;
  }

  set company(company: Company) {
    this._company = company;
  }
}
