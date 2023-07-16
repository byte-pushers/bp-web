import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {ContactService} from "../shared/services/contact.service";
import {CrmHubspotService} from "../shared/services/crm-hubspot.service";

@Injectable({
  providedIn: "root",
})
export class CTAService {
  public ctaReqObjSubject: BehaviorSubject<any>;
  public ctaReqObj: Observable<any>;

  constructor(private http: HttpClient, private contactService: CrmHubspotService) {
    this.ctaReqObjSubject = new BehaviorSubject<any>(null);
    this.ctaReqObj = this.ctaReqObjSubject.asObservable();
  }


  /**
   * CTA CTA form submission JS method Steps:
   * Java API Check for existing contact or create new contact then return contact id and or other info.
   * Save Activity transactions info via hubspot JS API (POC)
   * Save info cookie
   * NgRx to save state during user session
   */
  public saveSessionActivity(firstName: string, email: string, lastName?: string): void {
    // TODO: Java API Check for existing contact or create new contact then return contact id and or other info.

    this.contactService.getContactInfo(firstName, email, lastName).then(contactInfo => {
      // TODO: Save Activity transactions info via hubspot JS API (POC)
      // TODO: Save info cookie
      // TODO: NgRx to save state during user session
    });
  }
}
