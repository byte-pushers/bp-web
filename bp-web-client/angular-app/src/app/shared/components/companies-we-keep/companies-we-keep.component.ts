import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-companies-we-keep',
  standalone: true,
  imports: [],
  templateUrl: './companies-we-keep.component.html',
  styleUrl: './companies-we-keep.component.scss',
})
export class CompaniesWeKeepComponent {
  @Input() logosColor: string | undefined;
}
