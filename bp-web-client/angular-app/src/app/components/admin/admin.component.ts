import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
// import { AdminRoutes } from '@admin/admin.routes';
import { DialogModule } from '@angular/cdk/dialog';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [CommonModule, /*TableModule, *//*AdminRoutes, */DialogModule, RouterOutlet/*, MatCardModule*/],
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
