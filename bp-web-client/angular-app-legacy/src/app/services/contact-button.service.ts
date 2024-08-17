import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactButtonService {
  private _showContactButton = true;
  private _showBPLogo = false;

  contactButton: boolean;
  bpLogo: boolean;

  constructor() {
  }

  public isOnContactView(onContactView: boolean): boolean {

    if (onContactView === true) {
      this._showBPLogo = false;
      this._showContactButton = true;
      return this._showContactButton;
      return this._showBPLogo;

    } else {
      this._showContactButton = false;
      this._showBPLogo = true;
      return this._showContactButton;
      return this._showBPLogo;
    }

  }

  get showContactButton() {
    return this._showContactButton;
  }

  getShowContactButton() {
    return this._showContactButton;
  }

  set showContactButton(contactButton) {
    this._showContactButton = contactButton;
  }

  setShowContactButton(contactButton) {
    this._showContactButton = contactButton;
  }

  get showBPLogo() {
    return this._showBPLogo;
  }

  getShowBpLogo() {
    return this._showBPLogo;
  }

  set showBPLogo(bpLogo) {
    this._showBPLogo = bpLogo;
  }

  setShowBpLogo(bpLogo) {
    this._showBPLogo = bpLogo;
  }


}
