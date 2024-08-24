import { Component/*, Input*/ } from "@angular/core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: "social-media",
  standalone: true,
  imports: [FontAwesomeModule],
  template: `<!-- [ngClass]="isRightTemplate ? 'alignLeft' : ''"//--><ul
    class="relative mx-2">
    <li class="mb-2">
      <a
        href="https://facebook.com/bytepushersinc"
        target="_blank"
        title="Facebook"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faFacebook" class="text-3xl hover:text-yellow-400"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/BytePushersInc"
        target="_blank"
        title="Twitter"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faTwitter" class="text-3xl hover:text-yellow-400"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/bytepushersinc/"
        target="_blank"
        title="Instagram"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faInstagram" class="text-3xl hover:text-yellow-400"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/bytepushersinc/"
        target="_blank"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faLinkedin" class="text-3xl hover:text-yellow-400"></fa-icon>
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/@bytepushersinc"
        target="_blank"
        title="Youtube"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="faYoutube" class="text-3xl hover:text-yellow-400"></fa-icon>
      </a>
    </li>
  </ul> `,
})
export class SocialMediaComponent {
  // @Input() isRightTemplate;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  ngOnInit() {}
}
