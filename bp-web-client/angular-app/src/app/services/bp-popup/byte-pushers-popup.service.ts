import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BytePushersPopupService {
  public isBPpopupOpenSubject: BehaviorSubject<boolean>;
  public isBPpopupOpen: Observable<boolean>;

  constructor() {
    this.isBPpopupOpenSubject = new BehaviorSubject<boolean>(false);
    this.isBPpopupOpen = this.isBPpopupOpenSubject.asObservable();
  }
  public get isBPpopupOpenValue(): boolean {
    return this.isBPpopupOpenSubject.value;
  }
}
