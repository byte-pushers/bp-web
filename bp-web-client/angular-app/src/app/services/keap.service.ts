import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class KeapService {
  constructor(private httpClient: HttpClient) {
  }

  public authorizeApp(): Promise<any> {
    const baseUrl = '/api/v1/';
    const url = baseUrl + 'authorize-app';
    const options = {
      params: new HttpParams().set('platformName', 'KEAP')
    };
    return firstValueFrom(this.httpClient.get(url, options));
  }
}
