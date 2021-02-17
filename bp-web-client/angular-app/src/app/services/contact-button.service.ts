import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactButtonService {
  notOnContact = true;
  onContact = false;

  constructor() { }

public OnContactPage(notOnContact) {

    if (notOnContact === true){
      this.showContactImage(false);
      return notOnContact;

  } else {
      notOnContact = false;
      this.showContactImage(true);
      return notOnContact;
    }

  }

  public showContactImage(onContact): boolean {
    if (onContact === true) {
      return onContact;
    } else {
      onContact = false;
      return onContact;
    }
  }

}
