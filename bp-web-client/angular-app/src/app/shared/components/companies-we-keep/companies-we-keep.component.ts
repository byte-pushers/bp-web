import { Component, Input } from '@angular/core';
import { VartecLogoComponent } from './vartec-logo/vartec-logo.component';
import { VALogoComponent } from './va-logo/va-logo.component';
import { TilsterLogoComponent } from './tilster-logo/tilster-logo.component';
import { ThomsonReutersLogoComponent } from './thomson-reuters-logo/thomson-reuters-logo.component';
import { TexasInstrumentsLogoComponent } from './texas-instruments-logo/texas-instruments-logo.component';

@Component({
  selector: 'app-companies-we-keep',
  standalone: true,
  imports: [
    VartecLogoComponent,
    VALogoComponent,
    TilsterLogoComponent,
    ThomsonReutersLogoComponent,
    TexasInstrumentsLogoComponent,
  ],
  templateUrl: './companies-we-keep.component.html',
  styleUrl: './companies-we-keep.component.scss',
})
export class CompaniesWeKeepComponent {
  @Input() logosColor: string | undefined;
}
