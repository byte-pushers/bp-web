import { Component, Input } from "@angular/core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-social-media",
  template: `<ul
    class="socialMediaLinksTop"
    [ngClass]="isRightTemplate ? 'alignLeft' : ''"
  >
    <li>
      <a
        href="https://facebook.com/bytepushersinc"
        target="_blank"
        title="Facebook"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faFacebook"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/BytePushersInc"
        target="_blank"
        title="Twitter"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faTwitter"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/bytepushersinc/"
        target="_blank"
        title="Instagram"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faInstagram"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/bytepushersinc/"
        target="_blank"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faLinkedin"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/@bytepushersinc"
        target="_blank"
        title="Youtube"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faYoutube"></fa-icon>
      </a>
    </li>
  </ul> `,
})
export class SocialMediaComponent {
  @Input() isRightTemplate;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  ngOnInit() {}
}
