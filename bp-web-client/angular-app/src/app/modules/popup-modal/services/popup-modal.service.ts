import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PopupModalInfo } from '../models/popup-modal-info';
import { PopupModalIntoModel } from "../models/popup-modal-into.model";

@Injectable({
  providedIn: "root",
})
export class PopupModalService {
  private popupResponseSubject: Subject<any>;
  private popupBroadcastSubject: Subject<PopupModalInfo>;
  constructor() {
    this.popupBroadcastSubject = new Subject<PopupModalInfo>();
    this.popupResponseSubject = new Subject<{}>();
  }

  public getPopupBroadcast(): Observable<any> {
    return this.popupBroadcastSubject.asObservable();
  }
  public sendResponse(userResponse: boolean | string): void {
    this.popupResponseSubject.next(userResponse);
  }

  public showPopup(popupModalInfo: PopupModalInfo): Observable<PopupModalInfo> {
    this.popupBroadcastSubject.next(popupModalInfo);
    this.popupResponseSubject.unsubscribe();
    this.popupResponseSubject = new Subject<{}>();
    return this.popupBroadcastSubject.asObservable();
  }

  public confirmPopup(popupInfo: any): Observable<any> {
    return this.showPopup(popupInfo);
  }
  public throwError(popupInfo: any): Observable<any> {
    return this.showPopup(popupInfo);
  }

  public okPopup(popupInfo: any): Observable<any> {
    return this.showPopup(popupInfo);
  }
}
