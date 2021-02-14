import { Injectable } from '@angular/core';
import {ContactButtonService} from './contact-button.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(public onContact: ContactButtonService) { }

  public backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
