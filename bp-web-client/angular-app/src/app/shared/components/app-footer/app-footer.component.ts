import { Component, OnInit } from "@angular/core";
import { ContactButtonService } from "../../../services/contact-button.service";
import { environment } from "../../../../environments/environment";
import { ScrollToService } from "../../../services/scroll-to.service";
import { LoginService } from "src/app/services/login.service";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-footer",
  templateUrl: "./app-footer.component.html",
  styleUrls: ["./app-footer.component.css"],
})
export class AppFooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  isUserLoggedIn: boolean = false;
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;

  window = getWindow();
  document = getDocument();
  constructor(
    private contactButtonService: ContactButtonService,
    public scrollToService: ScrollToService,
    private loginService: LoginService // @Inject(PLATFORM_ID) private platformId: any,
  ) // private windowRef: WindowRef
  {
    this.loginService.currentUserSubject?.subscribe((value) => {
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
    let windowCheck;
    // if (isPlatformBrowser(this.platformId)) {
    //   windowCheck = this.windowRef.nativeWindow.innerWidth;
    // } else {
    windowCheck = window.innerWidth;
    // }
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
