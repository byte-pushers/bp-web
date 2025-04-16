import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CallToActionService {
    public isInlineCTASubject: BehaviorSubject<any>;
    public isInlineCTA: Observable<any>;

    public ctaReqObjSubject: BehaviorSubject<any>;
    public ctaReqObj: Observable<any>;

    constructor() {
        this.isInlineCTASubject = new BehaviorSubject<any>(false);
        this.isInlineCTA = this.isInlineCTASubject.asObservable();

        this.ctaReqObjSubject = new BehaviorSubject<any>({});
        this.ctaReqObj = this.ctaReqObjSubject.asObservable();
    }
}
