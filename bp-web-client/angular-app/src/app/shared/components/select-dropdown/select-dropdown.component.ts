import { Component } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss'
})
export class SelectDropdownComponent {
  selectedOption: any;
}
