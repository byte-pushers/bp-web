import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { VartecLogoComponent } from './vartec-logo/vartec-logo.component';
import { VALogoComponent } from './va-logo/va-logo.component';
import { TilsterLogoComponent } from './tilster-logo/tilster-logo.component';
import { ThomsonReutersLogoComponent } from './thomson-reuters-logo/thomson-reuters-logo.component';
import { TexasInstrumentsLogoComponent } from './texas-instruments-logo/texas-instruments-logo.component';
import { LLNLLogoComponent } from './llnl-logo/llnl-logo.component';
import { GeLogoComponent } from './ge-logo/ge-logo.component';
import { AvialLogoComponent } from './avial-logo/avial-logo.component';
import { NgClass, NgIf } from '@angular/common';
import { WINDOW } from '@app/services/windows/window';

@Component({
  selector: 'app-companies-we-keep',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    VartecLogoComponent,
    VALogoComponent,
    TilsterLogoComponent,
    ThomsonReutersLogoComponent,
    TexasInstrumentsLogoComponent,
    LLNLLogoComponent,
    GeLogoComponent,
    AvialLogoComponent,
  ],
  templateUrl: './companies-we-keep.component.html',
  styleUrl: './companies-we-keep.component.scss',
})
export class CompaniesWeKeepComponent implements OnInit {
  @Input() logosColor: string | undefined;
  public screenWidth: number;

  constructor(@Inject(WINDOW) private window: Window) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = this.window.innerWidth;
  }

  showFrom(allowedWidth: any) {
    return allowedWidth <= this.screenWidth;
  }
  // setWidth(companyName: string) {
  //   if (companyName == 'vartec')
  //     if (this.screenWidth <= 500) {
  //       return 'w-1/3';
  //     }
  // }
}
