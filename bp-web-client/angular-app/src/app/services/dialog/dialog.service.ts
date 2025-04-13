import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class DialogService {
    private openPopup = new Subject();
    public openPopupObservable = this.openPopup.asObservable();

    show() {
        this.openPopup.next(true);
    }

    hide() {
        this.openPopup.next(false);
    }
}