import { Component, OnInit } from "@angular/core";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";

@Component({
  selector: "app-bytepushers-popup",
  templateUrl: "./bytepushers-popup.component.html",
  styleUrls: ["./bytepushers-popup.component.scss"],
})
export class BytepushersPopupComponent implements OnInit {
  public isBPpopup;
  constructor(private bpPopupService: BytePushersPopupService) {}

  ngOnInit() {
    this.bpPopupService.isBPpopupOpenSubject.subscribe((value) => {
      this.isBPpopup = value;
    });
  }
}
