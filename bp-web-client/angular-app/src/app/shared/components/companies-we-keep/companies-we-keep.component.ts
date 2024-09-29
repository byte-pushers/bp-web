import { Component, Input } from '@angular/core';
import { VartecLogoComponent } from './vartec-logo/vartec-logo.component';
import { VALogoComponent } from './va-logo/va-logo.component';
import { TilsterLogoComponent } from './tilster-logo/tilster-logo.component';
import { ThomsonReutersLogoComponent } from './thomson-reuters-logo/thomson-reuters-logo.component';
import { TexasInstrumentsLogoComponent } from './texas-instruments-logo/texas-instruments-logo.component';
import { LLNLLogoComponent } from './llnl-logo/llnl-logo.component';
import { GeLogoComponent } from './ge-logo/ge-logo.component';
import { AvialLogoComponent } from './avial-logo/avial-logo.component';

@Component({
  selector: 'app-companies-we-keep',
  standalone: true,
  imports: [
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
export class CompaniesWeKeepComponent {
  @Input() logosColor: string | undefined;
}
