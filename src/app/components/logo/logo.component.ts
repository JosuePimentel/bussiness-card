import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  host: {
    "class": "block w-[150px] h-[150px]"
  },
  templateUrl: './logo.component.html',
})
export class LogoComponent {

}
