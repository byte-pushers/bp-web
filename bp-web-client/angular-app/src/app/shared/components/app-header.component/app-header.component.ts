import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  PLATFORM_ID,
  OnInit,
  Inject,
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";
import { LoginService } from "src/app/services/login.service";
import { ScrollToService } from "../../../services/scroll-to.service";
import { ReloadRefreshComponent } from "../reloadRefresh/reload-refresh.component";
import { getWindow, getDocument } from "ssr-window";
import { isPlatformBrowser } from "@angular/common";
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

  // window = getWindow();
  // document = getDocument();

  @HostListener("window:scroll", ["$event"])
  webpageScrolling(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const headerBar = document.getElementById("topnav");
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
  }
  selectedTheme: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public window: Window,
    public scrollTo: ScrollToService,
    public override router: Router,
    private loginService: LoginService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    super(router);
    this.loginService.currentUserSubject.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  override ngOnInit() {
    this.headerService.currentTheme.subscribe((theme: any) => {
      this.selectedTheme = theme;
    });

    console.log(this.selectedTheme);
    if (isPlatformBrowser(this.platformId)) {
      window.onscroll = function () {
        navScroll();
        checkCp3Desc();
      };
    }

    function navScroll() {
      if (isPlatformBrowser(this.platformId)) {
        const mobileNav = document.getElementById("topnav");
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          const scrollingNav = document.getElementById("topnav");
          scrollingNav?.classList?.add("topnav-scrolling");
          mobileNav?.classList?.remove("expanded");
        } else {
          const scrollingNav = document.getElementById("topnav");
          scrollingNav?.classList?.remove("topnav-scrolling");
        }
      }
    }

    function checkCp3Desc() {
      if (isPlatformBrowser(this.platformId)) {
        const checkCP3 = document.getElementById("cp3Desc");
        if (checkCP3 !== null && checkCP3 !== undefined) {
          showCp3Desc();
        }
      }
    }

    function showCp3Desc() {
      if (isPlatformBrowser(this.platformId)) {
        const showCp3Desc = document.getElementById("cp3Desc");
        if (
          document.body.scrollTop > 1000 ||
          document.documentElement.scrollTop > 1000
        ) {
          showCp3Desc.classList.add("activate");
        } else {
          showCp3Desc.classList.remove("activate");
        }
      }
    }
  }

  public checkMobileNav() {
    if (isPlatformBrowser(this.platformId)) {
      const windowCheck = window.innerWidth;
      if (windowCheck <= 768) {
        this.openCloseMobileNav();
      }
    }
  }

  public openCloseMobileNav() {
    if (isPlatformBrowser(this.platformId)) {
      const windowCheck = window.innerWidth;
      if (windowCheck <= 768) {
        const mobileNav = document.getElementById("topnav");

        if (mobileNav.classList.contains("expanded")) {
          mobileNav.classList.remove("expanded");
          this.isMobileNavOpen = false;
        } else {
          mobileNav.classList.add("expanded");
          this.isMobileNavOpen = true;
        }
      }
    }
  }
  refreshPage() {
    setTimeout(() => {
      this.reloadPage();
    }, 10);
  }

  showSmallLogo() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 960) {
        return true;
      }
      return false;
    }
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
    if (isPlatformBrowser(this.platformId)) {
      const headerBar = document.getElementById("topnav");
      const correntPageURL = this.router.url;
      let styles;

      if (
        headerBar.classList.contains("expanded") ||
        headerBar.classList.contains("topnav-scrolling")
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
    if (isPlatformBrowser(this.platformId)) {
      const headerBar = document.getElementById("topnav");
      if (headerBar.classList.contains("expanded") || this.isScrolled) {
        return "#000";
      }
      return this.selectedTheme.logoColor;
    }
  }

  hideTill1060() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 1060) {
        return false;
      }
      return true;
    }
  }

  isMobile() {
    if (isPlatformBrowser(this.platformId)) {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        return true;
      }
      return false;
    }
  }

  hideAfter1000() {
    if (isPlatformBrowser(this.platformId)) {
      if (
        document.body.scrollTop > 960 ||
        document.documentElement.scrollTop > 960
      ) {
        return false;
      }
      return true;
    }
  }

  setTopToZero() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.isScrolled = false;
    }
  }
  goToReqQuote() {
    this.router.navigate(["/contact"]);
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  }
}
