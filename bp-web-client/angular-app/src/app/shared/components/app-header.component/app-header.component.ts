import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";
import { LoginService } from "src/app/services/login.service";
import { ScrollToService } from "../../../services/scroll-to.service";
import { ReloadRefreshComponent } from "../reloadRefresh/reload-refresh.component";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"],
})
export class AppHeaderComponent extends ReloadRefreshComponent {
  isUserLoggedIn: boolean = false;
  isScrolled: boolean = false;
  isMobileNavOpen: boolean = false;
  @HostListener("window:scroll", ["$event"])
  webpageScrolling(event: any) {
    const headerBar = document.getElementById("topnav");
    if (headerBar.classList.contains("topnav-scrolling")) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  selectedTheme: any;
  constructor(
    public scrollTo: ScrollToService,
    public override router: Router,
    private loginService: LoginService,
    private headerService: HeaderService,
    private route: ActivatedRoute
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
    window.onscroll = function () {
      navScroll();
      checkCp3Desc();
    };

    function navScroll() {
      const mobileNav = document.getElementById("topnav");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        const scrollingNav = document.getElementById("topnav");
        scrollingNav.classList.add("topnav-scrolling");
        mobileNav.classList.remove("expanded");
      } else {
        const scrollingNav = document.getElementById("topnav");
        scrollingNav.classList.remove("topnav-scrolling");
      }
    }

    function checkCp3Desc() {
      const checkCP3 = document.getElementById("cp3Desc");
      if (checkCP3 !== null && checkCP3 !== undefined) {
        showCp3Desc();
      }
    }

    function showCp3Desc() {
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

  public checkMobileNav() {
    const windowCheck = window.innerWidth;
    if (windowCheck <= 768) {
      this.openCloseMobileNav();
    }
  }

  public openCloseMobileNav() {
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
  refreshPage() {
    setTimeout(() => {
      this.reloadPage();
    }, 10);
  }

  showSmallLogo() {
    if (window.innerWidth <= 768) {
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
  getLogoColor() {
    const headerBar = document.getElementById("topnav");
    if (headerBar.classList.contains("expanded") || this.isScrolled) {
      return "#000";
    }
    return this.selectedTheme.logoColor;
  }

  hideTill1060() {
    if (window.innerWidth <= 1060) {
      return false;
    }
    return true;
  }
  hideAfter1000() {
    if (
      document.body.scrollTop > 960 ||
      document.documentElement.scrollTop > 960
    ) {
      return false;
    }
    return true;
  }

  setTopToZero() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.isScrolled = false;
  }
  goToReqQuote() {
    this.router.navigate(["/contact"]);
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }
}
