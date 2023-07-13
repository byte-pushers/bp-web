import { Component, OnInit,Renderer2 } from "@angular/core";
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
  constructor(private _renderer2: Renderer2) {}

  ngOnInit() {
       let script = this._renderer2.createElement('script');
       script.type = `text/javascript`;
       script.text =`
        var _hsq = window._hsq = window._hsq || [];
        _hsq.push(["identify",{
               email: 'pharshu.ram@armam.com',
               favorite_color: 'orange'
           }]);
        _hsq.push(['setPath', '/work']);
        _hsq.push(['trackPageView']);
       `;
       this._renderer2.appendChild(document.body, script);

  }
}
