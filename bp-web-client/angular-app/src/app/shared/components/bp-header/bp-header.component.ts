import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoTextAsideComponent } from '@app/components/logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '@app/components/logo-text-bottom/logo-text-bottom.component';

@Component({
  selector: 'bp-header',
  standalone: true,
  imports: [LogoTextAsideComponent, LogoTextBottomComponent],
  templateUrl: './bp-header.component.html',
  styleUrl: './bp-header.component.scss'
})
export class BpHeaderComponent {
  constructor(private router: Router) {

  }
  goHome() {
    this.router.navigate(['/home'])
  }

}
