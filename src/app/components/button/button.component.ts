import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) link!: string;

  click(e: MouseEvent) {
    if (!this.link) {
      e.preventDefault();
      Swal.fire({
        html: `${this.text.toUpperCase()} está em construção..`,
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }
}
