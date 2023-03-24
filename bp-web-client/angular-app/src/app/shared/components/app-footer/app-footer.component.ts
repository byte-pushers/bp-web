import { Component, OnInit } from "@angular/core";
import { ContactButtonService } from "../../../services/contact-button.service";
import { environment } from "../../../../environments/environment";
import { ScrollToService } from "../../../services/scroll-to.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-footer",
  templateUrl: "./app-footer.component.html",
  styleUrls: ["./app-footer.component.css"],
})
export class AppFooterComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;

  constructor(
    private contactButtonService: ContactButtonService,
    public scrollToService: ScrollToService,
    private loginService: LoginService
  ) {
    this.loginService.currentUserSubject.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {}

  public showBPLogo() {
    return this.contactButtonService.getShowBpLogo();
  }

  public showContactButton() {
    return this.contactButtonService.getShowContactButton();
  }

  public backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  public openCloseMobileNav() {
    const windowCheck = window.innerWidth;
    if (windowCheck <= 480) {
      const mobileNav = document.getElementById("topnav");

      if (mobileNav.classList.contains("expanded")) {
        mobileNav.classList.remove("expanded");
      } else {
        mobileNav.classList.add("expanded");
      }
    }
  }

  currentYearLong(): number {
    return new Date().getFullYear();
  }
}
