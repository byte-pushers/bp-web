import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactButtonService {
  notOnContact = true;

  constructor() { }

public OnContactPage(notOnContact) {

    if (notOnContact === true){
      return notOnContact;
  } else {
      notOnContact = false;

      return notOnContact;
    }

  }

}
