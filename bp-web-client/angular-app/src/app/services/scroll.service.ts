import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  public backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
