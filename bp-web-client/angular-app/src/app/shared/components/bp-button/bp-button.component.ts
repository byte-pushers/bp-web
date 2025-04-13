import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  OnInit,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'bp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bp-button.component.html',
  styleUrl: './bp-button.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class BpButtonComponent implements OnInit {
  @Input() iconAlign: 'left' | 'right' = 'left';
  @Input() title: string | undefined = undefined;
  @Input() isDisabled: boolean = false;
  @Input() type: string = '';
  @Input() uiType: 'primary' | 'secondary' | 'primary outline' | 'secondary outline' | 'standardYellow' = 'primary';
  @Output() onClick = new EventEmitter<any>();

  constructor() {
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log(this.title);
  }
  handleClick(): void {
    this.onClick.emit(event);
  }
}
