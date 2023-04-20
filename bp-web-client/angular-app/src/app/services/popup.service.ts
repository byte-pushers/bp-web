import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PopupService {
  private popupResponseSubject: Subject<any>;
  private popupBroadcastSubject: Subject<any>;
  constructor() {
    this.popupBroadcastSubject = new Subject<{}>();
    this.popupResponseSubject = new Subject<{}>();
  }

  public getPopupBroadcast(): Observable<any> {
    return this.popupBroadcastSubject.asObservable();
  }
  public sendResponse(userResponse: boolean | string): void {
    this.popupResponseSubject.next(userResponse);
  }

  public showPopup(popupinfo: any): Observable<boolean> {
    this.popupBroadcastSubject.next(popupinfo);
    this.popupResponseSubject.unsubscribe();
    this.popupResponseSubject = new Subject<{}>();
    return this.popupBroadcastSubject.asObservable();
  }

  public confirmPopup(popupInfo: any): Observable<any> {
    return this.showPopup(popupInfo);
  }

  public okPopup(popupInfo: any): Observable<any> {
    return this.showPopup(popupInfo);
  }
}
