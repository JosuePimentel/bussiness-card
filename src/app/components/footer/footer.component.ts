import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  host: {
    "class": "w-full flex justify-center flex-grow items-end mt-5 mb-2"
  },
  templateUrl: './footer.component.html',
})
export class FooterComponent {

}
