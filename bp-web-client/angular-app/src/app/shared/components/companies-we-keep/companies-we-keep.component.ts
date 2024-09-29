import { Component, Input } from '@angular/core';
import { VartecLogoComponent } from './vartec-logo/vartec-logo.component';
import { VALogoComponent } from './va-logo/va-logo.component';

@Component({
  selector: 'app-companies-we-keep',
  standalone: true,
  imports: [VartecLogoComponent, VALogoComponent],
  templateUrl: './companies-we-keep.component.html',
  styleUrl: './companies-we-keep.component.scss',
})
export class CompaniesWeKeepComponent {
  @Input() logosColor: string | undefined;
}
