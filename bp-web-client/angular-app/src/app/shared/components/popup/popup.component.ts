import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/services/dialog/dialog.service';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CallToActionComponent, NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  isDialog: any;
  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.dialog.openPopupObservable.subscribe(isActive => {
      this.isDialog = isActive
    })
  }
}
