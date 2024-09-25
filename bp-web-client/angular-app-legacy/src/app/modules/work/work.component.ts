import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { environment } from "../../../environments/environment";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { HeaderService } from "src/app/services/header.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  @ViewChild("scrollable") scrollable: any;

  @HostListener("window:scroll", ["$event"])
  window = getWindow();
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.title.setTitle(
      "Design, Develop and Deliver your ideas on time and under budget."
    );
    this.headerService.setTheme(
      {
        logoColor: "#fff",
        NavColor: "#fff",
      },
      "Work"
    );
  }

  scrollToTop() {
    this.window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }

  setThemeBGImg() {
    let styles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('assets/images/worksPage/bytePushersWorksPageSplashScreenBackground.jpg')
          center no-repeat`,
      "background-size": "cover",
    };
    return styles;
  }

  showBorders(): boolean | void {
    let isBorders;
    this.route.queryParams.subscribe((params) => {
      if (params?.showBorder == "true") {
        isBorders = params?.showBorder;
      }
    });
    return isBorders;
  }
}
