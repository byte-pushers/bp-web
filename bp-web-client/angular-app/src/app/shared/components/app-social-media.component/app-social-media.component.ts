import { Component } from "@angular/core";

@Component({
  selector: "app-social-media",
  template: `<ul class="socialMediaLinksTop">
    <li>
      <a
        href="https://facebook.com/bytepushersinc"
        target="_blank"
        title="Facebook"
        rel="noopener noreferrer"
      >
        <i class="pi pi-facebook"></i>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/BytePushersInc"
        target="_blank"
        title="Twitter"
        rel="noopener noreferrer"
      >
        <i class="pi pi-twitter"></i>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/bytepushersinc/"
        target="_blank"
        title="Instagram"
        rel="noopener noreferrer"
      >
        <i class="pi pi-instagram"></i>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/bytepushersinc/"
        target="_blank"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <i class="pi pi-linkedin"></i>
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/@bytepushersinc"
        target="_blank"
        title="Youtube"
        rel="noopener noreferrer"
      >
        <i class="pi pi-youtube"></i>
      </a>
    </li>
  </ul> `,
})
export class SocialMediaComponent {}
