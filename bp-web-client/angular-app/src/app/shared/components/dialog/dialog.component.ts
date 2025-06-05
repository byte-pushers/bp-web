import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/services/dialog/dialog.service';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CallToActionComponent, NgIf, FontAwesomeModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {
  faClose = faClose;
  isDialog: any;
  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.dialog.openPopupObservable.subscribe(isActive => {
      this.isDialog = isActive
    })
  }
  closeDialog() {
    this.dialog.hide()
  }
}
