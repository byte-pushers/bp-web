import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-work',
  templateUrl: './app-work.component.html',
  styleUrls: ['./app-work.component.css']
})
export class WorkComponent implements OnInit {
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  constructor() { }

  ngOnInit() {


  }

}
