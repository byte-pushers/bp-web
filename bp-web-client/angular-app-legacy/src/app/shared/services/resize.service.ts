import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {DEVICE_PLATFORM} from '../models/screen-size.enum';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  get onResize$(): Observable<DEVICE_PLATFORM> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<DEVICE_PLATFORM>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: DEVICE_PLATFORM) {
    this.resizeSubject.next(size);
  }

}
