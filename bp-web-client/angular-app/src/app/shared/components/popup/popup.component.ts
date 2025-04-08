import { Component } from '@angular/core';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CallToActionComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

}
