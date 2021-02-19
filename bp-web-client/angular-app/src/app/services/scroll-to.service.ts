import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  public toTopOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
