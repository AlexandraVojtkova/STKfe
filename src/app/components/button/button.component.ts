import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [
    RouterLink
  ],
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input()
  url!: string;
  @Input()
  text: string = "Button";
}
