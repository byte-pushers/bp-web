import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { GoogleTagManagerService } from "angular-google-tag-manager";
import { ScrollToService } from "../../../services/scroll-to.service";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"],
})
export class AppHeaderComponent implements OnInit {
  constructor(
    public scrollTo: ScrollToService,
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit() {
    window.onscroll = function () {
      navScroll();
      checkCp3Desc();
    };

    function navScroll() {
      const mobileNav = document.getElementById("topnav");
      if (
        document.body.scrollTop > 570 ||
        document.documentElement.scrollTop > 570
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
    // push GTM data layer for every visited page
    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: "page",
          pageName: item.url,
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }

  public checkMobileNav() {
    const windowCheck = window.innerWidth;
    if (windowCheck <= 480) {
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
}
