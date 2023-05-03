import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-work",
  templateUrl: "./app-work.component.html",
  styleUrls: ["./app-work.component.css"],
})
export class WorkComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  constructor() {}

  ngOnInit() {}
}
