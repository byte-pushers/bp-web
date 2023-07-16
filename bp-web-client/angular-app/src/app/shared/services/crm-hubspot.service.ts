import {Injectable} from "@angular/core";
import {ContactService} from "./contact.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class CrmHubspotService implements ContactService {
  #defaultHeader: HttpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  constructor(private http: HttpClient) {
  }
  public getContactInfo(firstName: string, email: string, lastName?: string): Promise<any> {
    const payload = {firstName, lastName, email};

    return new Promise<any>((resolve, reject) => {
      this.http.post<any>(environment.HUBSPOT_CONTACT_SERVICE.API.HOST, payload, {
        headers: this.#defaultHeader,
        responseType: "json",
      }).subscribe(resposne => resolve(resposne.data), error => reject(error));
    });
  }
}
