import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/services/dialog/dialog.service';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CallToActionComponent, NgIf],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {
  isDialog: any;
  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.dialog.openPopupObservable.subscribe(isActive => {
      this.isDialog = isActive
    })
  }
}
