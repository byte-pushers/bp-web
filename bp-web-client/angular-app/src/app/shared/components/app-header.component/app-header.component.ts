import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";
import { LoginService } from "src/app/services/login.service";
import { ScrollToService } from "../../../services/scroll-to.service";
import { ReloadRefreshComponent } from "../reloadRefresh/reload-refresh.component";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"],
})
export class AppHeaderComponent extends ReloadRefreshComponent {
  isUserLoggedIn: boolean = false;
  isScrolled: boolean = false;
  isMobileNavOpen: boolean = false;
  logoTextColor = "#fff";
  logoTextBottomColor = "#fff";
  hamburgerColor = "#fff";

  @HostListener("window:scroll", ["$event"])
  webpageScrolling(event: any) {
    const headerBar = this.document.getElementById("topnav");
    if (headerBar.classList.contains("topnav-scrolling")) {
      this.isScrolled = true;
      if (this.isMobileNavOpen) {
        this.isMobileNavOpen = false;
      }
    } else {
      this.isScrolled = false;
      this.isMobileNavOpen = false;
    }
  }
  selectedTheme: any;

  window = getWindow();
  document = getDocument();

  constructor(
    public scrollTo: ScrollToService,
    public override router: Router,
    private loginService: LoginService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) public override platformId: any,
    public override windowRef: WindowRef
  ) {
    super(router, platformId, windowRef);
    this.loginService.currentUserSubject?.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  override ngOnInit() {
    this.headerService.currentTheme?.subscribe((theme: any) => {
      this.selectedTheme = theme;
    });
    this.window.onscroll = function () {
      navScroll();
      checkCp3Desc();
    };

    function navScroll() {
      const mobileNav = this.document.getElementById("topnav");
      if (
        this.document.body.scrollTop > 100 ||
        this.document.documentElement.scrollTop > 100
      ) {
        const scrollingNav = this.document.getElementById("topnav");
        scrollingNav?.classList?.add("topnav-scrolling");
        mobileNav?.classList?.remove("expanded");
      } else {
        const scrollingNav = this.document.getElementById("topnav");
        scrollingNav?.classList?.remove("topnav-scrolling");
      }
    }

    function checkCp3Desc() {
      const checkCP3 = this.document.getElementById("cp3Desc");
      if (checkCP3 !== null && checkCP3 !== undefined) {
        showCp3Desc();
      }
    }

    function showCp3Desc() {
      const showCp3Desc = this.document.getElementById("cp3Desc");

      if (
        this.document.body.scrollTop > 1000 ||
        this.document.documentElement.scrollTop > 1000
      ) {
        showCp3Desc.classList.add("activate");
      } else {
        showCp3Desc.classList.remove("activate");
      }
    }
  }
  public windowCheck;
  setWindowCheck() {
    this.windowCheck = this.window.innerWidth;
  }

  public checkMobileNav() {
    this.setWindowCheck();
    if (this.windowCheck <= 768) {
      this.openCloseMobileNav();
    }
  }

  public openCloseMobileNav() {
    this.setWindowCheck();

    if (this.windowCheck <= 768) {
      const mobileNav = this.document.getElementById("topnav");

      if (mobileNav.classList.contains("expanded")) {
        mobileNav.classList.remove("expanded");
        this.isMobileNavOpen = false;
      } else {
        mobileNav.classList.add("expanded");
        this.isMobileNavOpen = true;
      }
    }
  }
  refreshPage() {
    setTimeout(() => {
      this.reloadPage();
    }, 10);
  }

  showSmallLogo() {
    this.setWindowCheck();
    if (this.windowCheck <= 960) {
      return true;
    }
    return false;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/"]);
  }
  setCTAColor() {
    let styles = {
      color: this.selectedTheme.logoColor,
    };
    return styles;
  }
  setColor(pageName: string) {
    const headerBar = this.document.getElementById("topnav");
    const correntPageURL = this.router.url;
    let styles;

    if (
      headerBar?.classList.contains("expanded") ||
      headerBar?.classList.contains("topnav-scrolling")
    ) {
      if (correntPageURL.includes(pageName)) {
        styles = {
          color: "#000",
          "border-bottom-color": "#000",
        };
      } else {
        styles = {
          color: "#000",
          "border-bottom-color": "transparent",
        };
      }
      return styles;
    } else {
      if (correntPageURL.includes(pageName)) {
        styles = {
          color: this.selectedTheme.NavColor,
          "border-bottom-color": this.selectedTheme.NavColor,
        };
      } else {
        styles = {
          color: this.selectedTheme.NavColor,
          "border-bottom-color": "transparent",
        };
      }
      return styles;
    }
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    let viewChanged = [];

    viewChanged.push(this.setLogoTextColor("#000"));
    viewChanged.push(this.setLogoTextBottomColor("#000"));
    viewChanged.push(this.setHamburgerColor("#000"));

    if (viewChanged.find((vc) => vc === true)) {
      this.cd.detectChanges();
    }
  }

  setLogoTextBottomColor(newColor: string): void {
    this.logoTextBottomColor = newColor;
  }

  setLogoTextColor(newColor: string): void {
    this.logoTextColor = newColor;
  }

  setHamburgerColor(newColor: string): void {
    this.hamburgerColor = newColor;
  }
  getLogoColor() {
    const headerBar = this.document.getElementById("topnav");
    if (headerBar.classList.contains("expanded") || this.isScrolled) {
      return "#000";
    }
    return this.selectedTheme.logoColor;
  }

  hideTill1060() {
    this.setWindowCheck();
    if (this.windowCheck <= 1060) {
      return false;
    }
    return true;
  }

  isMobile() {
    this.setWindowCheck();
    if (this.windowCheck <= 768) {
      return true;
    }
    return false;
  }

  hideAfter1000() {
    if (
      this.document.body.scrollTop > 960 ||
      this.document.documentElement.scrollTop > 960
    ) {
      return false;
    }
    return true;
  }

  setTopToZero() {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.isScrolled = false;
  }
  goToReqQuote() {
    this.router.navigate(["/contact"]);
    this.window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }
}
