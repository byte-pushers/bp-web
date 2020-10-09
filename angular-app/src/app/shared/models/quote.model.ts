import {Quote} from "./quote";
import {Person} from "./person";
import {Company} from "./company";
import {PersonModel} from "./person.model";
import {CompanyModel} from "./company.model";
import {BaseEntityModel} from "./base.entity.model";

export class QuoteModel  implements Quote {
  private _contact: Person;
  private _company: Company;

  static readonly DEFAULT_CONFIG: any = {

    contact: new PersonModel(PersonModel.DEFAULT_CONFIG),
    company: new CompanyModel(CompanyModel.DEFAULT_CONFIG)
  };

  constructor(private quoteConfig: QuoteModel) {

    this._contact = (quoteConfig !== null && quoteConfig !== undefined) ? quoteConfig.contact : null;
    this._company = (quoteConfig !== null && quoteConfig !== undefined) ? quoteConfig.company : null;
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
