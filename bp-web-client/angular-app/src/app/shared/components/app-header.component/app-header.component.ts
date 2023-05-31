import { Component, HostListener, Input, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
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
    private headerService: HeaderService
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
    if (windowCheck <= 500) {
      this.openCloseMobileNav();
    }
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

  setColor() {
    const headerBar = document.getElementById("topnav");
    let styles;
    if (
      headerBar.classList.contains("expanded") ||
      headerBar.classList.contains("topnav-scrolling")
    ) {
      styles = {
        color: "#000",
        "border-bottom-color": "#000",
      };
      return styles;
    }

    styles = {
      color: this.selectedTheme.NavColor,
      "border-bottom-color": this.selectedTheme.NavColor,
    };
    return styles;
  }
  getLogoColor() {
    const headerBar = document.getElementById("topnav");
    if (headerBar.classList.contains("expanded")) {
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
}
